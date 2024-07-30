import React from "react";
import styles from "./Layout.module.css";

const TwoColumn = ({ children }) => {
  return <div className={styles.twoColumn}>{children}</div>;
};

export default TwoColumn;
