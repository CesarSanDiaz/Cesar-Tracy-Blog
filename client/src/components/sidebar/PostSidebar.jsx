import { Card, Stack, Text, Title, UnstyledButton } from '@mantine/core';
import React, { useState } from 'react';

const PostSidebar = () => {
  const [randomN, setRandomN] = useState();
  const randomNumbGen = Math.floor(Math.random() * 10) + 1;
  return (
    <>
      <Card shadow='sm' radius='sm' withBorder m='sm'>
        <Title order={3}>
          More from{' '}
          <UnstyledButton onClick={() => setRandomN(randomNumbGen)}>
            Cesar
          </UnstyledButton>
        </Title>
        <Stack p='sm'>
          <Title order={4}>{randomN}</Title>
          <Text>Desc 1</Text>
        </Stack>
        <Stack p='sm'>
          <Title order={4}>{randomN}</Title>
          <Text>Desc 2</Text>
        </Stack>
        <Stack p='sm'>
          <Title order={4}>title 3</Title>
          <Text>Desc 3</Text>
        </Stack>
      </Card>
      <Card shadow='sm' radius='sm' withBorder m='sm'>
        <Title order={3}>Check out these latest posts!</Title>
        <Stack p='sm'>
          <Title order={4}>title</Title>
          <Text>Author</Text>
        </Stack>
        <Stack p='sm'>
          <Title order={4}>title</Title>
          <Text>Author</Text>
        </Stack>
      </Card>
    </>
  );
};

export default PostSidebar;
