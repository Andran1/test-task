import React from 'react';
import { WrapperBanner } from '../../components/banner/wrapper-banner';
import { Block } from '../../components/block/block';

import styles from './home-page.module.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <WrapperBanner />
      <Block>
        <div className={styles.homeBlock}>HomePage</div>
      </Block>
    </>
  );
};
