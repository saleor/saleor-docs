import React from "react";

import s from "./tiles.module.css";

const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const Tiles = () => {
  return (
    <div className={s.container}>
      {range(0, 100).map((index) => {
        const isHighlighted = Math.sin(index) > 0.9 ? s.highlight : "";

        return <div className={`${s.tile} ${isHighlighted}`} key={index}></div>;
      })}
    </div>
  );
};

export default Tiles;
