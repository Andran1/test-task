import React from 'react';
import { ECurentSectionType } from '../../../enums';
import { getJsonData } from '../../../hooks/get-json-data';
import { CustomCarousel } from '../../custom-carusel/custom-carusel';

export const FeaturedProductsWrapper: React.FC = () => {
  const dto = getJsonData('featuredProducts');
  return (
    <CustomCarousel
      dto={dto}
      showArrows
      sectionType={ECurentSectionType.FEATURED_PRODUCTS}
      pagination={false}
      title="Featured Products"
    />
  );
};
