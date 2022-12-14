import React from "react";

import styles from "./styles.module.css";

const CardGrid = ({ children, home = false }) => (
  <section className={"row " + styles.cardGrid}>
    {"map" in children ? (
      children.map((child) => (
        <article className="col col--6 margin-bottom--lg">{child}</article>
      ))
    ) : (
      <article className="col col--6 margin-bottom--lg">{children}</article>
    )}
  </section>
);

export default CardGrid;
