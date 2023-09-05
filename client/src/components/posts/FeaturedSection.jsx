import {
  Card,
  Divider,
  Image,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import parser from 'html-react-parser';
import React from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    padding: 'theme.padding.sm',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0',
    borderRadius: theme.radius.lg,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },
  body: {
    paddingRight: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },
  title: {
    lineHeight: 1,
    marginBottom: theme.spacing.sm,
  },
  postsDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

const FeaturedSection = ({ posts }) => {
  // destructuring from posts but only from first element
  const [{ title, desc, photo }] = posts.slice(0, 1);
  const { classes } = useStyles();
  const PF = 'https://cesar-tracy-blog.vercel.app/images/';

  return (
    <div className={classes.container}>
      <Title order={2} align='left' p='xs'>
        Featured
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.postsDivider}
        // m='auto'
        w='15%'
      />
      <Card className={classes.wrapper}>
        <Image src={PF + photo} alt='image' className={classes.image} />
        <div className={classes.body}>
          <Title order={2} ta='center' className={classes.title}>
            {title}
          </Title>
          <Text fz='sm' c='dimmed' lineClamp={3} ta='center'>
            {parser(desc)}
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default FeaturedSection;
