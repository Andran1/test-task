import React from 'react';
import Carousel from 'react-elastic-carousel';
import { ArrowType, ECurentSectionType } from '../../enums';
import { Banner, IBannerProps } from '../banner/banner';
import prev from './icon/arrow-prev.svg';
import next from './icon/arrow-next.svg';

import styles from './custom-carusel.module.scss';
import { FeaturedProducts, IFeaturedProductsProps } from '../featured-products/featured-products';

type RenderArrowProps = {
  type: 'PREV' | 'NEXT';
  onClick: () => void;
  isEdge: boolean;
};
type IcarouselItemElementProps = any & IBannerProps & IFeaturedProductsProps;

interface IWrapperCarouselProps {
  dto?: IcarouselItemElementProps[];
  sectionType?: string;
  showArrows: boolean;
  pagination: boolean;
}

export const CustomCarousel: React.FC<IWrapperCarouselProps> = ({
  dto,
  sectionType,
  showArrows,
  pagination,
}) => {
  const getCarouselItem = (
    carouselItemElement: IcarouselItemElementProps,
  ): React.ReactNode | null => {
    switch (sectionType) {
      case ECurentSectionType.BANNER:
        return <Banner data={carouselItemElement} />;
      case ECurentSectionType.FEATURED_PRODUCTS:
        return <FeaturedProducts data={carouselItemElement} />;
      default:
        return null;
    }
  };

  const myArrow = ({ type, onClick, isEdge }: RenderArrowProps): React.ReactNode => {
    const pointer =
      type === ArrowType.PREV ? <img src={prev} alt="prev" /> : <img src={next} alt="next" />;
    return (
      <button
        type="button"
        disabled={isEdge}
        className={type === ArrowType.PREV ? styles.btnPrev : styles.btnNext}
        onClick={onClick}
      >
        {pointer}
      </button>
    );
  };

  return (
    <div className={styles.block}>
      <Carousel
        isRTL={false}
        showArrows={showArrows}
        enableTilt={false}
        enableSwipe
        renderArrow={myArrow}
        pagination={pagination}
      >
        {dto && dto.map((el: IcarouselItemElementProps) => getCarouselItem(el))}
      </Carousel>
    </div>
  );
};
