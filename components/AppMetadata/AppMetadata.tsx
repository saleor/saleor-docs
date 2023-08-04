import React from "react";
import styles from "./AppMetadata.module.css";

type Props = {
  minSaleorVersion: string;
  roadmapUrl: string;
  githubUrl: string;
};

export const AppMetadata = ({
  minSaleorVersion,
  roadmapUrl,
  githubUrl,
}: Props) => {
  return (
    <div className={styles.root}>
      <div>
        <span>
          Saleor version required: <strong>{minSaleorVersion}</strong>
        </span>
      </div>
      <div>
        <span>
          Roadmap: <a href={roadmapUrl}>GitHub</a>
        </span>
      </div>
      <div>
        <span>
          Repository: <a href={githubUrl}>GitHub</a>
        </span>
      </div>
    </div>
  );
};
