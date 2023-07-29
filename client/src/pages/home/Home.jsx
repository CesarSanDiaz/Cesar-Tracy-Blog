import { Grid, MediaQuery, createStyles } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

export default function Home() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);

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

  const useStyles = createStyles(() => ({
    test: {
      order: 3,
    },
  }));

  const { classes } = useStyles();

  return (
    <>
      <div className='home'>
        <Header />
        <Grid grow>
          <Grid.Col span={8} xs={12} sm={6} md={8} className='posts'>
            <Posts posts={posts} />
          </Grid.Col>
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Grid.Col span={4} xs={0} sm={6} md={4} className={classes.sidebar}>
              <Sidebar />
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </div>
    </>
  );
}
