import React from 'react';
import styles from './hero.module.css';
import envision from '../assets/envision.png';

const Hero = () => (
  <div className={styles.hero}>
    <section className={styles.envisionContainer}>
      <div className={styles.envisionInfo}>
        <img alt="Envision Logo" src={envision} />
        <div className={styles.envisionDate}>
          <h2>April 20, 2019</h2>
          <h2>Cal Poly SLO</h2>
          <h2>San Luis Obispo, CA</h2>
        </div>
        <div className={styles.envisionApply}>
          <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/forms/nXkSYuZVTRZ4WZ9Q2">Apply</a>
        </div>
        <div className={styles.envisionMentor}>
          <h2 className={styles.envisionMentorText}>Want to mentor?</h2>
          <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/forms/IbjeGpf3x6wOGmes2">Mentor App</a>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
