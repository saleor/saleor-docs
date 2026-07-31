import React from "react";

import styles from "./styles.module.css";

const isYouTubeEmbed = (src) => /youtube\.com\/embed|youtu\.be\//.test(src); // cspell:ignore youtu

/**
 * YouTube embed (iframe) or self-hosted media (`<video>`).
 * Pass `poster` for local files when you have a cover frame.
 */
const Video = ({ src, poster, title = "Video player" }) => {
  if (isYouTubeEmbed(src)) {
    return (
      <div className={styles.wrapper}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.media}
        ></iframe>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.media}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        title={title}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
