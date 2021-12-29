import React from 'react';
import { ECurentSectionType } from '../../../enums';
import { CustomCarousel } from '../../custom-carusel/custom-carusel';

export const BannerWrapper: React.FC = () => {
  const [d, setD] = React.useState<any>(null);
  React.useEffect(() => {
    fetch('http://localhost:8000/banner')
      .then((response) => response.json())
      .then((data) => setD(data));
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <CustomCarousel
        dto={d}
        sectionType={ECurentSectionType.BANNER}
        showArrows={false}
        pagination
      />
    </div>
  );
};
