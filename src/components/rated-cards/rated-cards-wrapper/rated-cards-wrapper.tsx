import React from 'react';
import { ECurentSectionType } from '../../../enums';
import { getJsonData } from '../../../hooks/get-json-data';
import { CustomCarousel } from '../../custom-carusel/custom-carusel';

export const RatedCardsWrapper: React.FC = () => {
  const dto = getJsonData('ratedCards');
  return (
    <CustomCarousel
      dto={dto}
      showArrows
      sectionType={ECurentSectionType.RATED_CARDS}
      pagination={false}
      title="Top Rated"
    />
  );
};
