import React from 'react';
import {
  IFeaturedProductItemProps,
  ProductItem,
} from '../featured-products/product-item/product-item';

import styles from './new-products.module.scss';

interface INewProductsProps {
  id: number;
  newProductsItem: IFeaturedProductItemProps[];
}

interface INewProductsPropsItem {
  data: INewProductsProps;
}

export const NewProducts: React.FC<INewProductsPropsItem> = ({ data }) => {
  const { newProductsItem } = data;

  return (
    <div className={styles.featuredProductItemWrapper}>
      <div className={styles.rowContainer}>
        {newProductsItem.map((item: IFeaturedProductItemProps) => {
          return <ProductItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
