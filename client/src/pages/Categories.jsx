import { Divider, SegmentedControl, Title, createStyles } from '@mantine/core';
import { IconTag } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
// import { axiosInstance } from '../../config';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Tiptap from '../components/tiptap/Tiptap';

const useStyles = createStyles((theme) => ({
  catDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  catTopIcon: {
    display: 'block',
    margin: 'auto',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

export default function Categories() {
  const { classes } = useStyles();
  const { search } = useLocation();
  const [categories, setCategories] = useState(null);
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5000/api/categories' + search
        );
        const namesToArray = Array.from(res.data.map((cat) => cat.name));
        setCategories(namesToArray);
        // const res = await axiosInstance.get('/categories');
        // setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [search]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      // fetching from local host if its up and running
      // const res = await axios.get('http://localhost:5000/api/posts' + search);
      // setPosts(res.data);
      console.log(res.data[0]);
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: '12px' }}>
      <IconTag size={50} className={classes.catTopIcon} />
      <Title order={2} align='center' p='xs'>
        Categories
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.catDivider}
        m='auto'
        w='25%'
      />
      <SegmentedControl
        data={categories || []}
        size='md'
        fullWidth
        styles={(theme) => ({
          label: {
            color:
              theme.colorScheme === 'dark' ? 'white' : theme.colors.blue[6],
          },
          controlActive: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.myYellow[7]
                : theme.colors.blue[6],
          },
        })}
      />
      <Tiptap />
    </div>
  );
}
