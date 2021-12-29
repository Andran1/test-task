import React from 'react';
import { ActionButtonType } from '../../enums';
import { ActionButton } from '../action-button/action-button';
import arrow from './icon/arrow.svg';

import styles from './banner.module.scss';

interface IBannerPropsItem {
  id: number;
  title: string;
  subTitle: string;
  text: string;
  url: string;
}
export interface IBannerProps {
  data: IBannerPropsItem;
}

export const Banner: React.FC<IBannerProps> = ({ data }) => {
  const { id, title, url, subTitle, text } = data;
  return (
    <div
      key={id}
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={styles.bannerItem}
    >
      <div className={styles.bannerContent}>
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
        <p>{text}</p>
      </div>
      <ActionButton type={ActionButtonType.ICON} icon={arrow} text="SHOP NOW" />
    </div>
  );
};
