import {
  Avatar,
  Badge,
  Card,
  Group,
  Image,
  Loader,
  Paper,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
// import axios from 'axios';
import parser from 'html-react-parser';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';

const useStyles = createStyles((theme) => ({
  postCard: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[8]
        : theme.colors.white,
  },
  postBadge: {
    textTransform: 'capitalize',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[1],
    color: theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.blue,
  },
}));

export default function Post({ post }) {
  const [isLoading, setIsLoading] = useState(false);
  const PF = 'https://cesar-tracy-blog.vercel.app/images/';
  // const PF = 'http://localhost:5000/images/';
  const { classes } = useStyles();
  const [postUser, setPostUser] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // fetching usr info based off post name
    const { username } = post;
    const fetchUserInfo = async () => {
      // fetching from local host if its up and running
      // const res = await axios.get(
      //   `http://localhost:5000/api/users/?username=${username}`
      // );
      // fetching from vercel
      const res = await axiosInstance.get(`users/?username=${username}`);
      setPostUser(res.data);
      setIsLoading(false);
    };
    fetchUserInfo();
  }, [post]);

  return (
    <Card shadow='sm' radius='lg' withBorder p={0} className={classes.postCard}>
      <Link to={`/post/${post._id}`}>
        {post.photo &&
          (isLoading ? (
            <Loader my='20%' size='xl' />
          ) : (
            <Image src={PF + post.photo} alt='Post Pic' height={350} />
          ))}
      </Link>

      <Paper sx={{ backgroundColor: 'transparent' }} p='xs'>
        <div>
          {post.categories.map((c) => {
            return (
              <Link to={`/?cat=${c}`} className='link' key={c}>
                <Badge className={classes.postBadge} size='md' mr='sm'>
                  {c}
                </Badge>
              </Link>
            );
          })}

          <Link to={`/post/${post._id}`} className='link'>
            <Title order={2} ta='center' pt='sm'>
              {post.title}
            </Title>
          </Link>
          <Text size={10} py={0} ta='center'>
            {new Date(post.createdAt).toDateString()}
          </Text>
          <Text lineClamp={1} ta='center'>
            {parser(post.desc)}
          </Text>
        </div>

        {/* <Skeleton visible={isLoading} radius='lg' > */}
        <Group position='apart' pt='xs'>
          <Group spacing='xs'>
            {isLoading ? (
              <Loader my='20%' size='xs' />
            ) : (
              <Link to={`/?user=${post.username}`} className='link'>
                {postUser.map((user) => (
                  <Avatar
                    size='md'
                    radius='md'
                    src={PF + user.profilePic}
                    key={user.id}
                  />
                ))}
              </Link>
            )}

            <Link to={`/?user=${post.username}`} className='link'>
              <Text size={14} sx={{ textTransform: 'capitalize' }}>
                <b>{post.username}</b>
              </Text>
            </Link>
          </Group>
          <Text size={12} component='a' href={`/post/${post._id}`}>
            Read more...
          </Text>
        </Group>
        {/* </Skeleton> */}
      </Paper>
    </Card>
  );
}
