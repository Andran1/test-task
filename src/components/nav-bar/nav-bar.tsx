import React from 'react';
import burger from './icon/burger.svg';
import logo from './icon/logo.svg';
import search from './icon/search.svg';
import account from './icon/account.svg';
import down from './icon/arrow-down.svg';
import basket from './icon/basket.svg';

import styles from './nav-bar.module.scss';

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navBarBlock}>
      <div className={`d-flex header `}>
        <div>
          <img src={burger} alt="burger" />
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search Products" />
          <img className={styles.searchButton} src={search} alt="search" />
        </div>

        <div className={styles.account}>
          <div>
            <img className={styles.accountIcon} src={account} alt="account" />
          </div>
          <div>
            <h5>Account</h5>
            <div className="d-flex align-items-center ms-1">
              <p>Sign In </p>
              <img src={down} alt="down" />
            </div>
          </div>
        </div>

        <div className={styles.account}>
          <div>
            <img src={basket} alt="account" />
          </div>
          <div>
            <h5>Cart</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
