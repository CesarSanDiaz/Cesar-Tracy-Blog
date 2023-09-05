import {
  Button,
  Grid,
  Loader,
  MediaQuery,
  Paper,
  Title,
  // Skeleton,
  createStyles,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { axiosInstance } from '../../config';
// import axios from 'axios';

// revisit this margin?
const useStyles = createStyles(() => ({
  sidebar: {
    margin: 'none',
  },
}));

export default function Home() {
  // search is to get the user and category query on the home page
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useStyles();

  // Fetching Posts
  useEffect(() => {
    // fetching from Vercel
    setIsLoading(true);
    const fetchPosts = async () => {
      const res = await axiosInstance.get('/posts' + search);
      // fetching from local host if its up and running
      // const res = await axios.get('http://localhost:5000/api/posts' + search);
      setPosts(res.data);
      setIsLoading(false);
    };
    fetchPosts();
  }, [search]);

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.white,
      })}
    >
      <Header />
      <div>
        <Grid grow>
          <Grid.Col span={9}>
            {isLoading ? (
              <Title order={4} align='center' my={50}>
                Loading Posts....
                <Loader size='xl' variant='dots' my={12} />
              </Title>
            ) : (
              <Posts posts={posts} isLoading={isLoading} />
            )}
          </Grid.Col>
          <MediaQuery
            smallerThan='sm'
            styles={{ display: 'none' }}
            className={classes.sidebar}
          >
            <Grid.Col span={3}>
              {isLoading ? (
                <Title order={4} align='center' my={50}>
                  Loading Categories...
                  <Loader size='xl' variant='dots' my={12} />
                </Title>
              ) : (
                <Sidebar />
              )}
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </div>
      <Button
        style={{ display: 'block' }}
        variant='filled'
        m='auto'
        my='sm'
        size='md'
      >
        <Link to='/blog' className='link'>
          All Posts
        </Link>
      </Button>
    </Paper>
  );
}
