import React from 'react';
import cn from 'classnames';
import { MarginType } from '../../enums';

import styles from './block.module.scss';

interface IBlockProps {
  children: React.ReactNode;
  margin?: MarginType;
  className?: string;
  headingText?: string;
  isGrid?: boolean;
}

export const Block: React.FC<IBlockProps> = ({
  children,
  margin,
  className = '',
  headingText,
  isGrid = true,
}) => {
  return (
    <section
      className={cn(styles.block, styles[margin ? `margin-${margin}` : 'no-margin'], className, {
        [styles.grid]: isGrid,
      })}
    >
      {headingText && <h2 className={styles.blockHeading}>{headingText}</h2>}
      {children}
    </section>
  );
};
