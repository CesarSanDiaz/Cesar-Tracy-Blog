import {
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import { IconTrees } from '@tabler/icons-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Post from '../../components/post/Post';

const useStyles = createStyles((theme) => ({
  blogPagePaper: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[7]
        : theme.colors.white,
  },
  post: {
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.lg,
      transform: 'scale(1.04)',
    },
  },
  blogTopIcon: {
    display: 'block',
    margin: 'auto',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  blogPageDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
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
    <Paper radius={0} p='sm' className={classes.blogPagePaper}>
      <IconTrees size={50} className={classes.blogTopIcon} />
      <Title order={2} align='center' p='xs'>
        Blog Feed
      </Title>
      <Divider size={0} p='1.5px' mb='md' className={classes.blogPageDivider} />
      <Group position='apart' maw='80vw' m='auto'>
        <Text size='lg' p='sm'>
          Text 1
        </Text>
        <Text size='lg' p='sm'>
          Filter button?
        </Text>
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
