import {
  Button,
  Card,
  Divider,
  Image,
  Stack,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import parser from 'html-react-parser';
import React from 'react';
// import { usePostContext } from '../../context/PostsContext';

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
    // margin: 'auto',
    padding: `calc(${theme.spacing.xl} * 2)`,
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
  button: {
    display: 'block',
    marginRight: 'auto',
    color:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.white,
  },
}));

const FeaturedSection = ({ posts }) => {
  const { classes } = useStyles();
  const PF = 'https://cesar-tracy-blog.vercel.app/images/';

  // destructuring from posts but only from first element
  // const [{ title, desc, photo, _id }] = posts.slice(0, 1);

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
      {posts.slice(0, 1).map((post, index) => {
        return (
          <div className={classes.card} key={index}>
            <div className={classes.image}>
              <Image src={PF + post.photo} alt='image' height={300} />
            </div>
            <Stack className={classes.body}>
              <Title order={2} ta='left' className={classes.title} mb='lg'>
                {post.title}
              </Title>
              <Text fz='sm' c='dimmed' lineClamp={4} ta='left' mb='lg'>
                {parser(post.desc)}
              </Text>
              <Button
                component='a'
                href={`/post/${post._id}`}
                variant='filled'
                className={classes.button}
              >
                Read More
              </Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedSection;
