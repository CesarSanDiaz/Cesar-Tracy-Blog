import {
  Badge,
  Card,
  Group,
  Image,
  Paper,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  postCard: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[6]
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
  const PF = 'http://localhost:5000/images/';
  const { classes } = useStyles();

  return (
    <Card shadow='sm' radius='lg' withBorder p={0} className={classes.postCard}>
      <Link to={`/post/${post._id}`}>
        {post.photo && (
          <Image
            className='postImg'
            src={PF + post.photo}
            alt='pic'
            height={350}
          />
        )}
      </Link>

      <Paper sx={{ backgroundColor: 'transparent' }} p='xs'>
        {/* <Stack align='flex-start' spacing='md'> */}
        <div>
          <Badge className={classes.postBadge} size='xs'>
            {post.categories.map((c) => {
              return (
                <Link to={`/?cat=${c}`} className='link' key={c}>
                  {c}
                </Link>
              );
            })}
          </Badge>

          <Link to={`/post/${post._id}`} className='link'>
            <Title order={2} ta='center'>
              {post.title}
            </Title>
          </Link>
          <Text size={10} py={0} ta='center'>
            {new Date(post.createdAt).toDateString()}
          </Text>
          <Text lineClamp={1} ta='center'>
            {post.desc}
          </Text>
        </div>

        <Group position='apart' pt='xs'>
          <Text size={12} sx={{ textTransform: 'capitalize' }}>
            Author:{' '}
            <Link to={`/?user=${post.username}`} className='link'>
              <b>{post.username}</b>
            </Link>
          </Text>
          <Text size={12} component='a' href={`/post/${post._id}`}>
            Read more...
          </Text>
        </Group>
        {/* </Stack> */}
      </Paper>
    </Card>

    // const useStyles = createStyles((theme) => ({
    //   catCard: {
    //     width: '25%',
    //     margin: 'auto',
    //     backgroundColor:
    //       theme.colorScheme === 'dark'
    //         ? theme.colors.myPurple[6]
    //         : theme.colors.white,
    //   },
    // }));

    //     <Card
    //   shadow='sm'
    //   radius='lg'
    //   withBorder
    //   p='md'
    //   className={classes.catCard}
    //   align='center'
    // ></Card>
  );
}
