import React from "react";

import s from "./styles.module.css";

const Chapters = ({ children, home = false }) => (
  <section className={s.root}>
    <div className={s.grid}>
      {"map" in children ? (
        children.map((child, idx) => <article key={idx}>{child}</article>)
      ) : (
        <article>{children}</article>
      )}
    </div>
  </section>
);

export default Chapters;
