import React, { createContext, useContext } from 'react';

export const PostsContext = createContext('test');

export const PostsProvider = ({ children }) => {
  return (
    <PostsContext.Provider value={{ id: 1 }}>{children}</PostsContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostsContext);
};
