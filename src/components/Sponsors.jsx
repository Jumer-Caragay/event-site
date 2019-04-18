import React from 'react';
import Header from './Header';
import styles from './sponsors.module.css';
import wd from '../assets/workday.png';
import ng from '../assets/northrop.png';

const Sponsors = () => (
  <div className={styles.sponsors}>
    <Header headerText="Sponsors" />
    <div className={styles.sponsorsLayout}>
      <div className={styles.sprague}>
        <h1>Sprague Family Foundation</h1>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.workday}>
          <img alt="Workday" src={wd} />
        </div>
        <div className={styles.northrop}>
          <img alt="Northrop Grumman" src={ng} />
        </div>
      </div>
    </div>
  </div>
);

export default Sponsors;
