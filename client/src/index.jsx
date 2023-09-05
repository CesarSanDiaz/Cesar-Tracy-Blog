import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './context/Context';
import { PostsProvider } from './context/PostsContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ContextProvider>
  </React.StrictMode>
);
