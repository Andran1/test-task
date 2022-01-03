import React from 'react';
import { FILTER_OPTIONS } from '../../constants';

import styles from './filter.module.scss';

export interface IFilterOptionItem {
  id: number;
  name: string;
}

export const Filter: React.FC = () => {
  return (
    <div className={styles.filterBlock}>
      <ul className={styles.warpper}>
        {FILTER_OPTIONS.map((el: IFilterOptionItem) => {
          return (
            <li className={styles.item} key={el.id}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
