import React from "react";

import ExternalLinkIcon from "../../static/assets/icons/external-link.svg";
import styles from "./AppMetadata.module.css";

export const AppMetadata = ({ minSaleorVersion, roadmapUrl, githubUrl }) => {
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
