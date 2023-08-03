import {
  BackgroundImage,
  Badge,
  Divider,
  Group,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import './singlePost.scss';

const useStyles = createStyles((theme) => ({
  singlePostDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  singlePostBadge: {
    color:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.black,
    background:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  singlePostImg: {
    width: '100%',
    height: '35vh',
    backgroundSize: 'contain',
    position: 'center',
  },
  singlePostDesc: {
    ':first-letter': {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.myYellow[7]
          : theme.colors.blue[6],
      paddingLeft: 'sm',
      fontSize: '30px',
      fontWeight: 500,
    },
  },
}));

export default function SinglePost() {
  const { classes } = useStyles();
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    //ANOTHER WAY
    // const getPost = async () => {
    //   return axios
    //     .get('http://localhost:5000/api/posts/' + path)
    //     .then((res) => setPost(res.data))
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
    // };
    // getPost();
    try {
      const getPost = async () => {
        const res = await axios.get('http://localhost:5000/api/posts/' + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      };
      getPost();
    } catch (err) {
      console.log(err.message);
    }
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className='singlePostWrapper' style={{ padding: '12px' }}>
        {updateMode ? (
          <input
            type='text'
            value={title}
            className='singlePostTitleInput'
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div>
            <Title order={1} align='center' p='sm'>
              {title}
              {post.username === user?.username && (
                <div className='singlePostEdit'>
                  <i
                    className='singlePostIcon far fa-edit'
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className='singlePostIcon far fa-trash-alt'
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </Title>
          </div>
        )}
        <Divider
          size='xs'
          p='1.5px'
          mb='sm'
          className={classes.singlePostDivider}
          m='auto'
          w='25%'
        />
        {post.photo && (
          <BackgroundImage
            className={classes.singlePostImg}
            src={PF + post.photo}
            alt=''
            radius='sm'
          />
        )}
        <Group position='apart' py='sm'>
          <Text align='center' transform='capitalize'>
            Posted on {new Date(post.createdAt).toDateString()} by{' '}
            <Link to={`/?user=${post.username}`} className='link'>
              <b>{post.username}</b>
            </Link>
          </Text>
          <Group>
            <Text>Categories:</Text>
            <Badge size='xs' radius='sm' className={classes.singlePostBadge}>
              Category
            </Badge>
          </Group>
        </Group>
        {updateMode ? (
          <textarea
            className='singlePostDescInput'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <Text p='sm' className={classes.singlePostDesc}>
            {desc}
          </Text>
        )}
        {updateMode && (
          <button className='singlePostButton' onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </>
  );
}
