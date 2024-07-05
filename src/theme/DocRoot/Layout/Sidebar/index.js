import React, { useState, useCallback, useRef } from "react";
import clsx from "clsx";
import {
  prefersReducedMotion,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";
import DocSidebar from "@theme/DocSidebar";
import ExpandButton from "@theme/DocRoot/Layout/Sidebar/ExpandButton";
import styles from "./styles.module.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }) {
  const sidebar = useDocsSidebar();
  return (
    <React.Fragment key={sidebar?.name ?? "noSidebar"}>
      {children}
    </React.Fragment>
  );
}
export default function DocRootLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer,
}) {
  const { pathname } = useLocation();
  const { name } = useDocsSidebar();
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    // onTransitionEnd won't fire when sidebar animation is disabled
    // fixes https://github.com/facebook/docusaurus/issues/8918
    if (!hiddenSidebar && prefersReducedMotion()) {
      setHiddenSidebar(true);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);

  const nodeRef = useRef(null);

  const [direction, setDirection] = useState(
    name === "main" ? "forward" : "back"
  );

  return (
    <aside
      className={clsx(
        ThemeClassNames.docs.docSidebarContainer,
        styles.docSidebarContainer,
        hiddenSidebarContainer && styles.docSidebarContainerHidden
      )}
      onTransitionEnd={(e) => {
        if (!e.currentTarget.classList.contains(styles.docSidebarContainer)) {
          return;
        }
        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }}
    >
      <SwitchTransition>
        <CSSTransition
          key={name}
          nodeRef={nodeRef}
          addEndListener={(node, done) => {
            setDirection(name === "main" ? "forward" : "back");
          }}
          timeout={200}
          classNames={direction}
        >
          <ResetOnSidebarChange>
            <div
              className={clsx(
                styles.sidebarViewport,
                hiddenSidebar && styles.sidebarViewportHidden
              )}
            >
              <div ref={nodeRef}>
                <DocSidebar
                  sidebar={sidebar}
                  path={pathname}
                  onCollapse={toggleSidebar}
                  isHidden={hiddenSidebar}
                />
                {hiddenSidebar && (
                  <ExpandButton toggleSidebar={toggleSidebar} />
                )}
              </div>
            </div>
          </ResetOnSidebarChange>
        </CSSTransition>
      </SwitchTransition>
    </aside>
  );
}
