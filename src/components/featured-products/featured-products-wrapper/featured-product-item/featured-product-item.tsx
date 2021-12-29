import React from 'react';

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

export const FeaturedProductItem: React.FC<IFeaturedProductItemPropsItem> = ({ data }) => {
  const { title, price, url, width } = data;
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        width: '100%',
        height: '200px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
        flex: `${width}`,
      }}
    >
      {title}
      {price}
    </div>
  );
};
