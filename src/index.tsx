import './app/styles/index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RootStateContext, rootState } from './app/store';
import reportWebVitals from './app/reportWebVitals';
import { App } from './app/App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RootStateContext.Provider value={rootState}>
      <App />
    </RootStateContext.Provider>
  </React.StrictMode>
);

reportWebVitals();