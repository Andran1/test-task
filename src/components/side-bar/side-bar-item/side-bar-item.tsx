import React from 'react';
import { Icon, IconType } from '../../icon/icon';

import styles from './side-bar-item.module.scss';

interface SideBarItemProps {
  name: string;
  iconType: IconType;
  isNotification: boolean;
  title: boolean;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  name,
  iconType,
  isNotification,
  title,
}) => {
  return (
    <div className={styles.itemBlock}>
      <div className={styles.leftBlock}>
        <span className={title ? styles.boldTitle : styles.title}>{name}</span>
        <div className={styles.iconWrapper}>
          <Icon type={iconType} />
        </div>
        {isNotification && <div className={styles.newIcon}>NEW</div>}
      </div>
      <Icon type={IconType.ARROW_RIGHT} />
    </div>
  );
};
