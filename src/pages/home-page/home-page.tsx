import React from 'react';
import { Block } from '../../components/block/block';
import { BannerWrapper } from '../../components/banner/banner-wrapper/banner-wrapper';
import { FeaturedProductsWrapper } from '../../components/featured-products/featured-products-wrapper/featured-products-wrapper';
import { SideBar } from '../../components/side-bar/side-bar';
import { NewPraductsWrapper } from '../../components/new-products/new-praducts-wrapper/new-praducts-wrapper';

import styles from './home-page.module.scss';
import { RatedCardsWrapper } from '../../components/rated-cards/rated-cards-wrapper/rated-cards-wrapper';

export const HomePage: React.FC = () => {
  return (
    <>
      <BannerWrapper />
      <Block>
        <div className={styles.homeBlock}>
          <SideBar />
          <div className={styles.rightBlock}>
            <FeaturedProductsWrapper />
            <NewPraductsWrapper />
            <RatedCardsWrapper />
          </div>
        </div>
      </Block>
    </>
  );
};
