import React from 'react';
import cn from 'classnames';

import styles from './icon.module.scss';

export enum IconType {
  'BANNERS' = 'banners',
  'ARROW_RIGHT' = 'arrow_right',
  'STAR' = 'star',
}

export enum IconSize {
  'LARGE' = 'large',
  'MEDIUM' = 'medium',
  'SMALL' = 'small',
  'TINY' = 'tiny',
}

interface IIconProps {
  type: IconType;
  size?: IconSize;
}

export const Icon: React.FC<IIconProps> = ({ type, size = IconSize.SMALL }) => {
  return <div className={cn({ [styles[`${size}-icon`]]: true }, { [styles[type]]: true })} />;
};
