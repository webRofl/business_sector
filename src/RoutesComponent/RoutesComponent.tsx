import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import PageNotFound from '../components/PageNotFound/PageNotFound';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/:id" element={<App />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
