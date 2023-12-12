import React from "react";
import styles from "./AppMetadata.module.css";
import ExternalLinkIcon from "../../static/assets/icons/external-link.svg";

type Props = {
  minSaleorVersion: string;
  roadmapUrl?: string;
  githubUrl?: string;
};

export const AppMetadata = ({
  minSaleorVersion,
  roadmapUrl,
  githubUrl,
}: Props) => {
  return (
    <div className={styles.root}>
      <span>
        Saleor version required: <strong>{minSaleorVersion}</strong>
      </span>
      {roadmapUrl && (
        <span>
          Roadmap:{" "}
          <a href={roadmapUrl}>
            GitHub <ExternalLinkIcon />
          </a>
        </span>
      )}
      {githubUrl && (
        <span>
          Repository:{" "}
          <a href={githubUrl}>
            GitHub <ExternalLinkIcon />
          </a>
        </span>
      )}
    </div>
  );
};
