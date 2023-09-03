import {
  Avatar,
  BackgroundImage,
  Badge,
  Button,
  Divider,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconExclamationMark,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react';
// import axios from 'axios';
import parser from 'html-react-parser';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { axiosInstance } from '../../config';
import { Context } from '../../context/Context';

const useStyles = createStyles((theme) => ({
  singlePostDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  singlePostBadge: {
    textTransform: 'capitalize',
    color: theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.blue,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[1],
  },
  singlePostImg: {
    width: '100%',
    height: '60vh',
    backgroundSize: 'cover',
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
  const PF = 'https://cesar-tracy-blog.vercel.app/images/';
  // const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [postUserImage, setPostUserImage] = useState('');

  useEffect(() => {
    try {
      const getPost = async () => {
        const res = await axiosInstance.get('/posts/' + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setCategory(res.data.categories);
      };
      getPost();
    } catch (err) {
      console.log(err.message);
    }
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  // useEffect to get post user info like ProfilePic
  useEffect(() => {
    try {
      const { username } = post;
      const fetchUserInfo = async () => {
        const res = await axiosInstance.get(`/users/?username=${username}`);
        setPostUserImage(res.data[0]?.profilePic);
      };
      fetchUserInfo();
    } catch (error) {
      console.log('error:' + error.message);
    }
  }, [post]);

  return (
    <>
      <div style={{ padding: '12px' }}>
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
                  <Button
                    leftIcon={<IconPencil size='1rem' />}
                    onClick={() => setUpdateMode(true)}
                  >
                    Update Post
                  </Button>
                  <Button
                    onClick={open}
                    variant='filled'
                    sx={{ backgroundColor: 'red' }}
                    leftIcon={<IconTrash size='1rem' />}
                  >
                    Delete Post
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
        <div>
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
          <Group>
            <Avatar size='md' radius='md' src={PF + postUserImage} />
            <Stack spacing={0}>
              <Link to={`/?user=${post.username}`} className='link'>
                <Text fw='bold' fz='xs'>
                  {post.username}
                </Text>
              </Link>
              <Text fz='xs' transform='capitalize'>
                Posted on {new Date(post.createdAt).toDateString()}
              </Text>
            </Stack>
          </Group>
          <Group>
            <Text>Categories:</Text>
            {category.map((cat) => (
              <Link key={cat} to={`/?cat=${cat}`} className='link'>
                <Badge size='xs' className={classes.singlePostBadge}>
                  {cat}
                </Badge>
              </Link>
            ))}
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
            {parser(desc)}
          </Text>
        )}
        {updateMode && (
          <Group position='center' p='sm'>
            <Button
              size='sm'
              onClick={handleUpdate}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.green[9]
                    : theme.colors.green[3],
              })}
            >
              Update
            </Button>
            <Button onClick={() => setUpdateMode(false)}>Cancel</Button>
          </Group>
        )}
        <Modal opened={opened} onClose={close} title='Delete Post'>
          <Stack align='center' spacing='xs'>
            <IconExclamationMark size='5rem' color='red' />
            <Title order={4}>Are you sure?</Title>
            <Text>This process cannot be undone.</Text>
          </Stack>
          <Group position='center' p='sm'>
            <Button onClick={close}>Cancel</Button>
            <Button variant='filled' color='red' onClick={handleDelete}>
              Delete
            </Button>
          </Group>
        </Modal>
      </div>
    </>
  );
}
