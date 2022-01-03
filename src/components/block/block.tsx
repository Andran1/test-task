import React from 'react';
import cn from 'classnames';

import styles from './block.module.scss';

interface IBlockProps {
  children: React.ReactNode;
  className?: string;
  headingText?: string;
  isGrid?: boolean;
}

export const Block: React.FC<IBlockProps> = ({
  children,
  className = '',
  headingText,
  isGrid = true,
}) => {
  return (
    <section
      className={cn(styles.block, className, {
        [styles.grid]: isGrid,
      })}
    >
      {headingText && <h2 className={styles.blockHeading}>{headingText}</h2>}
      {children}
    </section>
  );
};
