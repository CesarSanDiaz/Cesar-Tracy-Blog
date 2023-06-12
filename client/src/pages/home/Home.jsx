// import { useLocation } from "react-router";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

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

  return (
    <>
      <Header />
      <div className='home'>
        <div className='posts'>
          <Posts posts={posts} />
        </div>
        <div className='sidebar'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
