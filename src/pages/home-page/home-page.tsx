import React from 'react';
import { Block } from '../../components/block/block';
import { BannerWrapper } from '../../components/banner/banner-wrapper/banner-wrapper';

import styles from './home-page.module.scss';
import { FeaturedProductsWrapper } from '../../components/featured-products/featured-products-wrapper/featured-products-wrapper';
import { SideBar } from '../../components/side-bar/side-bar';

export const HomePage: React.FC = () => {
  return (
    <>
      <BannerWrapper />
      <Block>
        <div className={styles.homeBlock}>
          <SideBar />
          <FeaturedProductsWrapper />
        </div>
      </Block>
    </>
  );
};
