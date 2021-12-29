import React from 'react';
import premium from './icon/premium.svg';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.headerBlock}>
      <div className="header d-flex justify-content-between">
        <ul className={`d-flex ${styles.menu}`}>
          <li>
            <a href="http://google.com">Create Corner</a>
          </li>
          <li>
            <a href="http://google.com">Content Hub</a>
          </li>
          <li>
            <a href="http://google.com">Get Free Samples</a>
          </li>
          <li>
            <a href="http://google.com">Custom Page</a>
          </li>
        </ul>
        <div className="d-flex buttons">
          <div className={`d-flex ${styles.features}`}>
            <p className={styles.button}>NEW</p>
            <a href="$sdf ">My Influence Rewards</a>
          </div>
          <div className={`d-flex ${styles.features}`}>
            <p className={styles.button}>NEW</p>
            <a href="$sdf ">Marketing Cloud</a>
          </div>
          <div className={`d-flex ${styles.features}`}>
            <a href="$sdf ">Blank Templates</a>
          </div>
          <div className={`d-flex ${styles.features}`}>
            <img src={premium} alt="premium" />
            <a href="$sdf ">Go Premium</a>
          </div>
        </div>
      </div>
    </div>
  );
};
