import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import MainRouter from './routers/MainRouter';
import store from './context/store';
import './index.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <HashRouter>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </HashRouter>,
  );
}
