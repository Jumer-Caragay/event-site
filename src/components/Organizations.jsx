import React from 'react';
import styles from './organizations.module.css';
import Header from './Header';
import slohacks from '../assets/slohackslogo.png';
import wish from '../assets/wishlogo.png';

const Organizations = () => (
  <div className={styles.organizations}>
    <Header headerText="Who We Are" />
    <div className={styles.orgContent}>
      <div className={styles.sloImage}>
        <img src={slohacks} alt="SLO Hacks" />
      </div>
      <div className={styles.sloText}>
        <p className={styles.orgText}>
          Organization of collegiate hackathon organizers who bring
          three hackathons per year to the Cal Poly campus.
        </p>
      </div>
      <div className={styles.wishImage}>
        <img src={wish} alt="WISH" />
      </div>
      <div className={styles.wishText}>
        <p className={styles.orgText}>
          Community of female computing majors who share the goal
          to empower women and rectify the gender gap in technology.
        </p>
      </div>
    </div>
  </div>
);

export default Organizations;
