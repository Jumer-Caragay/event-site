import React from 'react';
import styles from './eventText.module.css';

const EventText = () => (
  <div className={styles.eventText}>
    <h1 className={styles.eventHeader}>Envision beyond the bounds and discover a limitless spectrum of possibilities.</h1>
    <p className={styles.eventParagraph}>
      Envision is a 12-hour high school hackathon located at California Polytechnic State University (Cal Poly)
      in San Luis Obispo. We are bringing together 150 students all across the central coast from schools that have
      limited access to computer science resources.
    </p>
  </div>
);
  
  export default EventText;