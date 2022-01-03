import React from 'react';
import { RatedCard } from '../rated-card';

import styles from './rated-cards.module.scss';

export interface IRatedCardItem {
  id: number;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  url: string;
}

interface IRatedCardPropsItem {
  id: number;
  cards: IRatedCardItem[];
}

export interface IRatedCardProps {
  data: IRatedCardPropsItem;
}

export const RatedCards: React.FC<IRatedCardProps> = ({ data }) => {
  return (
    <div className={styles.cardsBlock}>
      {data.cards.map((el: any) => {
        return <RatedCard key={el.id} item={el} />;
      })}
    </div>
  );
};
