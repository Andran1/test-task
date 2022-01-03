import React from 'react';
import { ECurentSectionType } from '../../../enums';
import { getJsonData } from '../../../hooks/get-json-data';
import { CustomCarousel } from '../../custom-carusel/custom-carusel';

export const NewPraductsWrapper: React.FC = () => {
  const dto = getJsonData('newProducts');
  return (
    <CustomCarousel
      dto={dto}
      showArrows
      sectionType={ECurentSectionType.NEW_PRODUCTS}
      pagination={false}
      title="New Products"
    />
  );
};
