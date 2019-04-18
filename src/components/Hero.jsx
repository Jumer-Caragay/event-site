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
      </div>
    </section>
  </div>
);

export default Hero;
