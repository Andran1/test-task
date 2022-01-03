import React from 'react';
import { Block } from '../components/block/block';

import styles from './layout.module.scss';

interface ILayoutProps {
  headerBlock: React.ReactNode;
  footerBlock?: React.ReactNode;
  navigationBlock?: React.ReactNode;
  filterBlock?: React.ReactNode;
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({
  headerBlock,
  footerBlock = null,
  navigationBlock = null,
  filterBlock = null,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Block>
        <div>{headerBlock}</div>
        <div>{navigationBlock}</div>
        <div>{filterBlock}</div>
      </Block>
      <div className={styles.content}>{children}</div>
      <div>{footerBlock}</div>
    </div>
  );
};
