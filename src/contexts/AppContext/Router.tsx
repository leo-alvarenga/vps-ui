import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from '../../types';

export interface RouterProps {
  routes: RouteData[];
}

function Router({ routes }: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ title, ...r }) => <Route key={`route-${title}`} { ...r } />)}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
