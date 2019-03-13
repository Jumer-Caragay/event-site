import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';

const Header = ({ headerText }) => (
  <div className={styles.header}>
    <div className={styles.headerContainer}>
      <h1 className={styles.headerText}>{headerText}</h1>
      <div className={styles.headerUnderline} />
    </div>
  </div>
);

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
