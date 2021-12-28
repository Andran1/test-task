import React, { ReactNode } from 'react';
import Carousel from 'react-elastic-carousel';
import { ArrowType } from '../../enums';
import { Banner } from './banner';
import prev from './icon/arrow-prev.svg';
import next from './icon/arrow-next.svg';

import styles from './banner.module.scss';

type RenderArrowProps = {
  type: 'PREV' | 'NEXT';
  onClick: () => void;
  isEdge: boolean;
};

export const WrapperBanner: React.FC = () => {
  const [d, setD] = React.useState<any>(null);
  React.useEffect(() => {
    fetch('http://localhost:8000/banner')
      .then((response) => response.json())
      .then((data) => setD(data));
  }, []);

  const myArrow = ({ type, onClick, isEdge }: RenderArrowProps): ReactNode => {
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
      <Carousel isRTL={false} showArrows enableTilt={false} enableSwipe renderArrow={myArrow}>
        {d && d.map((el: any) => <Banner el={el.img} />)}
      </Carousel>
    </div>
  );
};
