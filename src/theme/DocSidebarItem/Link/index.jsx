import isInternalUrl from "@docusaurus/isInternalUrl";
import Link from "@docusaurus/Link";
import { isActiveSidebarItem } from "@docusaurus/plugin-content-docs/client";
import { ThemeClassNames } from "@docusaurus/theme-common";
import IconExternalLink from "@theme/Icon/ExternalLink";
import clsx from "clsx";
import React from "react";

import { Icon } from "../../../../components/Icons/icons";
import styles from "./styles.module.css";

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl, customProps } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  const isTitle = customProps?.isTitle;

  const icon = customProps?.icon ? (
    <div className="menu__sidebar-icon">
      <Icon name={customProps.icon} />
    </div>
  ) : null;

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className
      )}
      key={label}
    >
      <Link
        className={clsx(
          "menu__link",
          !isInternalLink && styles.menuExternalLink,
          {
            "menu__link--active": isActive,
          }
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        <span
          className={clsx(
            `menu__link--wrapper`,
            isTitle && `menu__link--title`
          )}
        >
          {icon}
          {label}
          {!isInternalLink && <IconExternalLink />}
        </span>
      </Link>
    </li>
  );
}
