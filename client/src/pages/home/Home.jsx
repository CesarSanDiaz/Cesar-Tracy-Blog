import { Button, Grid, MediaQuery, Paper, createStyles } from '@mantine/core';
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
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const { classes } = useStyles();

  // Fetching Posts
  useEffect(() => {
    // fetching from Vercel
    const fetchPosts = async () => {
      const res = await axiosInstance.get('/posts' + search);
      // fetching from local host if its up and running
      // const res = await axios.get('http://localhost:5000/api/posts' + search);
      setPosts(res.data);
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
            <Posts posts={posts} />
          </Grid.Col>
          <MediaQuery
            smallerThan='sm'
            styles={{ display: 'none' }}
            className={classes.sidebar}
          >
            <Grid.Col span={3}>
              <Sidebar posts={posts} />
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
