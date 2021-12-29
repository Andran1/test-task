import React from 'react';
import { ECurentSectionType } from '../../../enums';
import { CustomCarousel } from '../../custom-carusel/custom-carusel';

export const FeaturedProductsWrapper: React.FC = () => {
  const [d, setD] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/featuredProducts')
      .then((response) => response.json())
      .then((data) => setD(data));
  }, []);
  return (
    <CustomCarousel
      dto={d}
      showArrows
      sectionType={ECurentSectionType.FEATURED_PRODUCTS}
      pagination={false}
    />
  );
};
