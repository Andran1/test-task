import React from 'react';
import { ActionButtonType } from '../../../enums';
import { ActionButton } from '../../action-button/action-button';

import styles from './product-item.module.scss';

export interface IFeaturedProductItemProps {
  id: number;
  title: string;
  price: string;
  url: string;
  shopNowButton: boolean;
  width: number;
}
interface IFeaturedProductItemPropsItem {
  data: IFeaturedProductItemProps;
}

export const ProductItem: React.FC<IFeaturedProductItemPropsItem> = ({ data }) => {
  const { title, price, url, width } = data;
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        flex: `${width}`,
      }}
      className={styles.productItemBlock}
    >
      <div className={styles.content}>
        <h6> {title}</h6>
        <ActionButton
          type={ActionButtonType.GREEN}
          text={`FROM ${price}`}
          className={styles.btnSize}
        />
      </div>
    </div>
  );
};
