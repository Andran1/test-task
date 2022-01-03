import React from 'react';
import { getJsonData } from '../../hooks/get-json-data';
import { Icon, IconType } from '../icon/icon';
import { SideBarItem } from './side-bar-item/side-bar-item';

import styles from './side-bar.module.scss';

export const SideBar: React.FC = () => {
  const dto = getJsonData('sidBarData');

  return (
    <div className={styles.sideBarBlock}>
      <div className={styles.sideBarHeader}>
        <Icon type={IconType.STAR} />
        <div className={styles.title}>All Products </div>
      </div>
      {dto &&
        dto.map((el: any) => {
          return (
            <SideBarItem
              key={el.id}
              name={el.name}
              iconType={el.iconType}
              isNotification={el.isNotification}
              title={el.title}
            />
          );
        })}
    </div>
  );
};
