import { Text, Title } from '@mantine/core';
import React, { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

export const TestingPostContext = () => {
  const { posts } = useContext(PostsContext);
  return (
    <>
      <Title>Posts</Title>
      <Text>Total posts: {posts.length} </Text>
    </>
  );
};
