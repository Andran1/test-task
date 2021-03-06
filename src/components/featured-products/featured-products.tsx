import React from 'react';
import { ProductItem, IFeaturedProductItemProps } from './product-item/product-item';

import styles from './featured-products.module.scss';

export interface IFeaturedProductsProps {
  id: number;
  featuredProductsItem: IFeaturedProductItemProps[];
}

export interface IFeaturedProductsPropsItem {
  data: IFeaturedProductsProps;
}

export const FeaturedProducts: React.FC<IFeaturedProductsPropsItem> = ({ data }) => {
  const { featuredProductsItem } = data;
  const upRowData = featuredProductsItem.slice(0, 3);
  const downRowData = featuredProductsItem.slice(3, 6);

  return (
    <div className={styles.featuredProductItemWrapper}>
      <div className={styles.rowContainer}>
        {upRowData.map((item: IFeaturedProductItemProps) => {
          return <ProductItem key={item.id} data={item} />;
        })}
      </div>
      <div className={styles.rowContainer}>
        {downRowData.map((item: IFeaturedProductItemProps) => {
          return <ProductItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
