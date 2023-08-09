import { randomId } from '@mantine/hooks';
import React, { createContext, useState } from 'react';

export const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { title: 'Post Title 1', desc: 'Post description 1', id: '1' },
    { title: 'Post Title 2', desc: 'Post description 2', id: '2' },
  ]);

  const addPost = (title, desc) => {
    setPosts([...posts, { title, desc, id: randomId() }]);
  };
  // filter() method to remove book:
  // true item go into new array. false items get taken out
  // !== true items out, false items in **
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <PostsContextProvider value={{ posts, addPost, removePost }}>
      {children}
    </PostsContextProvider>
  );
};

export default PostsContextProvider;
