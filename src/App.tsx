import React from 'react';
import { Layout } from './layout/layout';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';

import './styles/reset.scss';
import './styles/global.scss';

export const App: React.FC = ({ children }) => {
  return (
    <div>
      <Layout footerBlock={<Footer />} headerBlock={<Header />} navigationBlock={<NavBar />}>
        {children}
      </Layout>
    </div>
  );
};
