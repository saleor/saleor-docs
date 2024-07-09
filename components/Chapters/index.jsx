import React from "react";

import s from "./styles.module.css";

const Chapters = ({ children, home = false }) => (
  <section className={s.grid}>
    {"map" in children ? (
      children.map((child, idx) => <article key={idx}>{child}</article>)
    ) : (
      <article>{children}</article>
    )}
  </section>
);

export default Chapters;
