import {
  BackgroundImage,
  Badge,
  Button,
  Divider,
  Group,
  Text,
  TextInput,
  Textarea,
  Title,
  createStyles,
} from '@mantine/core';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';

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
    height: '50vh',
    backgroundSize: 'contain',
    position: 'center',
    backgroundRepeat: 'no-repeat',
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
          <TextInput
            type='text'
            size='lg'
            variant='filled'
            label='Enter Post Title'
            value={title}
            className='singlePostTitleInput'
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div>
            <Title order={1} align='center' p='sm'>
              {post.username === user?.username && (
                <Group position='apart'>
                  <Button onClick={() => setUpdateMode(true)}>Update</Button>
                  <Button onClick={handleDelete} c='red'>
                    Delete
                  </Button>
                </Group>
              )}
              {title}
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
        <div className={classes.picWrapper}>
          {post.photo && (
            <BackgroundImage
              className={classes.singlePostImg}
              src={PF + post.photo}
              alt=''
              radius='sm'
            />
          )}
        </div>
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
          <Textarea
            label='Enter Post Description'
            variant='filled'
            autosize
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <Text p='sm' className={classes.singlePostDesc}>
            {desc}
          </Text>
        )}
        {updateMode && <Button onClick={handleUpdate}>Update</Button>}
      </div>
    </>
  );
}
