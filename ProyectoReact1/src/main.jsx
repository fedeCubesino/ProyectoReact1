import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TintoProvider } from './context/TintoContext';
import { BlancoProvider } from './context/BlancoContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <TintoProvider>
      <BlancoProvider>
        <App />
      </BlancoProvider>
    </TintoProvider>
  </React.StrictMode>
);
