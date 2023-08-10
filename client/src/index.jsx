import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './context/Context';
import { PostsContextProvider } from './context/PostsContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
