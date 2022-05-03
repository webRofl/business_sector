import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import PageNotFound from '../components/PageNotFound/PageNotFound';

type RoutesProps = {};

const RoutesComponent: React.FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path="/:id" element={<App />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
