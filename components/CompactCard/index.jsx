import React from "react";

import styles from "./styles.module.css";

const CompactCard = ({ name, description, technology, link, icon }) => (
  <a
    href={link}
    className={styles.compactCard}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.compactCardContent}>
      <div className={styles.compactCardHeader}>
        {icon && <div className={styles.compactCardIcon}>{icon}</div>}
        <h3 className={styles.compactCardTitle}>{name}</h3>
      </div>
      <p className={styles.compactCardDescription}>{description}</p>
      {technology && (
        <div className={styles.compactCardFooter}>
          <span className={styles.technologyTag}>{technology}</span>
        </div>
      )}
    </div>
  </a>
);

export default CompactCard;
