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
      <div>
        <Header />
        <Grid grow m={0}>
          <Grid.Col span={8} xs={12} sm={6} md={8}>
            <Posts posts={posts} />
          </Grid.Col>
          <MediaQuery
            smallerThan='sm'
            styles={{ display: 'none' }}
            className={classes.sidebar}
          >
            <Grid.Col span={4} xs={0} sm={6} md={4}>
              <Sidebar posts={posts} />
            </Grid.Col>
          </MediaQuery>
        </Grid>
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
      </div>
    </Paper>
  );
}
