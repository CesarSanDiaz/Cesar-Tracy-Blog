import { Grid, MediaQuery, createStyles } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

const useStyles = createStyles(() => ({
  sidebar: {
    margin: 'none',
  },
}));

export default function Home() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const { classes } = useStyles();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
    // const fetchPost = async () => {
    //   return axios
    //     .get('http://localhost:5000/api/posts', {})
    //     .then((res) => {
    //       setPosts(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
    // };
    // fetchPost();
  }, [search]);

  return (
    <>
      <div>
        <Header />
        <Grid grow p='sm' m={0}>
          <Grid.Col span={8} xs={12} sm={6} md={8} p={0}>
            <Posts posts={posts} />
          </Grid.Col>
          <MediaQuery
            smallerThan='sm'
            styles={{ display: 'none' }}
            className={classes.sidebar}
          >
            <Grid.Col span={4} xs={0} sm={6} md={4} p='sm'>
              <Sidebar />
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </div>
    </>
  );
}
