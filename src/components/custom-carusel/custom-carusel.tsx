import React from 'react';
import Carousel from 'react-elastic-carousel';
import { ArrowType, ECurentSectionType } from '../../enums';
import { Banner, IBannerProps } from '../banner/banner';
import prev from './icon/arrow-prev.svg';
import next from './icon/arrow-next.svg';
import { FeaturedProducts, IFeaturedProductsProps } from '../featured-products/featured-products';
import { NewProducts } from '../new-products/new-products';
import { IRatedCardProps, RatedCards } from '../rated-cards/rated-cards/rated-cards';

import styles from './custom-carusel.module.scss';

type RenderArrowProps = {
  type: 'PREV' | 'NEXT';
  onClick: () => void;
  isEdge: boolean;
};
type IcarouselItemElementProps = (any & IBannerProps) | IFeaturedProductsProps | IRatedCardProps;

interface IWrapperCarouselProps {
  dto?: IcarouselItemElementProps[];
  sectionType?: string;
  showArrows: boolean;
  pagination: boolean;
  title?: string;
}

export const CustomCarousel: React.FC<IWrapperCarouselProps> = ({
  dto,
  sectionType,
  showArrows,
  pagination,
  title,
}) => {
  const getCarouselItem = (
    carouselItemElement: IcarouselItemElementProps,
  ): React.ReactNode | null => {
    switch (sectionType) {
      case ECurentSectionType.BANNER:
        return <Banner data={carouselItemElement} />;
      case ECurentSectionType.FEATURED_PRODUCTS:
        return <FeaturedProducts data={carouselItemElement} />;
      case ECurentSectionType.NEW_PRODUCTS:
        return <NewProducts data={carouselItemElement} />;
      case ECurentSectionType.RATED_CARDS:
        return <RatedCards data={carouselItemElement} />;
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
      <h2 className={styles.title}>{title}</h2>
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
