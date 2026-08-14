import React from "react";

import styles from "./styles.module.css";

const RecipeResourceGrid = ({ children }) => (
  <div className={styles.resourceGrid}>{children}</div>
);

export default RecipeResourceGrid;
