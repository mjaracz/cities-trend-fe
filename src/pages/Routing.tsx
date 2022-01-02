import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultToolkit } from './DefaultToolkit';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultToolkit />} />
      </Routes>
    </BrowserRouter>
  );
};
