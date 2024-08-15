import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { TintoProvider } from './context/TintoContext';
import { BlancoProvider } from './context/BlancoContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const firebaseConfig = {
  apiKey: "AIzaSyA-rLN3K2T6UVGj94bR7AynCeY58fz4rEw",
  authDomain: "sragliareact.firebaseapp.com",
  projectId: "sragliareact",
  storageBucket: "sragliareact.appspot.com",
  messagingSenderId: "348984936810",
  appId: "1:348984936810:web:7f84e27f6b8641f7b2fd13"
};
initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <TintoProvider>
      <BlancoProvider>
        <App />
      </BlancoProvider>
    </TintoProvider>
  </React.StrictMode>
);
