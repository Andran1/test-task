import React from 'react';
import { ECurentSectionType } from '../../../enums';
import { getJsonData } from '../../../hooks/get-json-data';
import { CustomCarousel } from '../../custom-carusel/custom-carusel';

export const BannerWrapper: React.FC = () => {
  const dto = getJsonData('banner');

  return (
    <CustomCarousel
      dto={dto}
      sectionType={ECurentSectionType.BANNER}
      showArrows={false}
      pagination
    />
  );
};
