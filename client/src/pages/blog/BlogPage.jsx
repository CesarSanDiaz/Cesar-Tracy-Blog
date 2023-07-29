import {
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Post from '../../components/post/Post';

const useStyles = createStyles((theme) => ({
  post: {
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.lg,
      transform: 'scale(1.04)',
    },
  },
}));

// had to do another API call until I figure out how to get the post in a UseContext.

export default function BlogPage() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);

  const { classes } = useStyles();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <Paper radius={0} p='sm'>
      <Title order={2} align='center' transform='capitalize' pb='sm'>
        Blog Feed
      </Title>
      <Divider my='sm' size='lg' />
      <Group position='apart' maw='80vw' m='auto'>
        <Text>Text 1</Text>
        <Text>Filter button?</Text>
      </Group>
      <SimpleGrid
        cols={4}
        spacing='lg'
        breakpoints={[
          { maxWidth: 'xs', cols: '1' },
          { maxWidth: 'sm', cols: '2' },
          { maxWidth: 'md', cols: '2' },
          { maxWidth: 'lg', cols: '3' },
          { maxWidth: 'xl', cols: '4' },
        ]}
        className=''
      >
        {posts.map((p) => {
          return (
            <div key={p.title} className={classes.post}>
              <Post post={p} />
            </div>
          );
        })}
      </SimpleGrid>
    </Paper>
  );
}
