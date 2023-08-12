import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './context/Context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider basename='/'>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
