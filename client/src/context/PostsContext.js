import React, { createContext, useContext, useEffect, useState } from 'react';
// import { axiosInstance } from '../config';
import axios from 'axios';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostsContext);
};
