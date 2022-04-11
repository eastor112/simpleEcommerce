import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { createRoot } from 'react-dom/client';
import MainRouter from './routers/MainRouter';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
