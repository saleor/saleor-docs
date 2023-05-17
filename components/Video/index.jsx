import React from "react";

import styles from "./styles.module.css";

const Video = ({ src }) => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className={styles.iframe}
      ></iframe>
    </div>
  );
};

export default Video;
