import {
  Divider,
  Group,
  Paper,
  SimpleGrid,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import { IconSearch, IconTrees } from '@tabler/icons-react';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Post from '../../components/post/Post';
import { axiosInstance } from '../../config';

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
      // boxShadow: theme.shadows.lg,
      transform: 'scale(1.01)',
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

export default function BlogPage() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');

  const { classes } = useStyles();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get('/posts' + search);

      // fetching from local host if its up and running
      // const res = await axios.get('http://localhost:5000/api/posts' + search);
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
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.blogPageDivider}
        m='auto'
        w='25%'
      />
      <Group position='right'>
        <TextInput
          placeholder='Search Post'
          value={filter}
          mb='sm'
          px={0}
          icon={<IconSearch size='1rem' />}
          onChange={(e) => setFilter(e.target.value)}
        />
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
        {posts
          .filter((p) => p.title.toLowerCase().includes(filter.toLowerCase()))
          .map((p) => {
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
