import React from "react";

import styles from "./styles.module.css";

const CardGrid = ({ children, home = false }) => (
  <section className={styles.cardGrid}>
    {"map" in children ? (
      children.map((child, idx) => <article key={idx}>{child}</article>)
    ) : (
      <article>{children}</article>
    )}
  </section>
);

export default CardGrid;
