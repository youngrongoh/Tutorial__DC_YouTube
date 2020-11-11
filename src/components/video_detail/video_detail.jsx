import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}?color=white`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h1 className={styles.title}>{snippet.title}</h1>
    <h2 className={styles.channel}>{snippet.channelTitle}</h2>
    <pre className={styles.desc}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
