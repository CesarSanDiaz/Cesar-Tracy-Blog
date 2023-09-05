import {
  Button,
  Card,
  Divider,
  Image,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import parser from 'html-react-parser';
import React from 'react';
import { usePostContext } from '../../context/PostsContext';

const useStyles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.sm,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.lg,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[8] : theme.white,

    [theme.fn.smallerThan('xs')]: { flexDirection: 'column' },
  },

  image: {
    objectFit: 'contain',
    width: '100%',

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
    },
  },
  body: {
    padding: theme.spacing.lg,
    width: '100%',

    [theme.fn.smallerThan('xs')]: {
      padding: theme.spacing.xl,
    },
  },
  title: {
    lineHeight: 1,
  },
  postsDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

const FeaturedSection = () => {
  // destructuring from posts but only from first element
  // const [{ title, desc, photo, _id }] = posts.slice(0, 1);
  const { classes } = useStyles();
  const PF = 'https://cesar-tracy-blog.vercel.app/images/';

  const { posts } = usePostContext();
  const firstPost = posts[0];

  return (
    <div className={classes.container}>
      <Title order={2} align='left' p='xs'>
        Featured Post
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.postsDivider}
        // m='auto'
        w='15%'
      />
      <Card className={classes.card} p={0} shadow='md' withBorder>
        <div className={classes.image}>
          <Image src={PF + firstPost.photo} alt='image' height={350} />
        </div>
        <div className={classes.body}>
          <Title order={2} ta='left' className={classes.title} mb='lg'>
            {firstPost.title}
          </Title>
          <Text fz='sm' c='dimmed' lineClamp={3} ta='left' mb='lg'>
            {parser(firstPost.desc)}
          </Text>
          <Button
            component='a'
            href={`/post/${firstPost._id}`}
            variant='filled'
          >
            Read More
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FeaturedSection;
