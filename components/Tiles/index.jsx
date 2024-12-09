import React, { useEffect } from "react";

import s from "./tiles.module.css";

const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const Tiles = () => {
  const [_t, setT] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setT((prev) => prev + 1);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={s.container}>
        {range(0, 100).map((index) => {
          const isHighlighted = Math.random() < 0.15 ? s.highlight : "";
          return (
            <div
              className={`${s.tile} ${isHighlighted}`}
              style={{ transitionDelay: `${Math.random()}s` }}
              key={index}
            ></div>
          );
        })}
      </div>
      <div className={s.meteorContainer}>
        {range(0, 10).map((index) => {
          return (
            <div
              className={s.meteor}
              key={`meteor-${index}`}
              style={{
                animationDelay: `${index}s`,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Tiles;
