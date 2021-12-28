import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { HomePage } from './pages/home-page/home-page';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};
