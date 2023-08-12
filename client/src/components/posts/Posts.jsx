import { Divider, Grid, Paper, Title, createStyles } from '@mantine/core';
import Post from '../../components/post/Post';

const useStyles = createStyles((theme) => ({
  number0: {
    order: 3,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      // boxShadow: theme.shadows.lg,
      transform: 'scale(1.015)',
    },
  },
  number1: {
    order: 2,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      // boxShadow: theme.shadows.lg,
      transform: 'scale(1.025)',
    },
  },
  number2: {
    order: 1,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      // boxShadow: theme.shadows.lg,
      transform: 'scale(1.025)',
    },
  },
  postsDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  postsPaper: {
    backgroundColor: 'transparent',
  },
}));

export default function Posts({ posts }) {
  const { classes } = useStyles();

  return (
    <Paper radius={0} p='sm' className={classes.postsPaper}>
      <Title order={2} align='center' p='xs'>
        Posts
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.postsDivider}
        m='auto'
        w='25%'
      />
      <Grid grow gutter='sm'>
        {posts.slice(0, 3).map((p, index) => {
          return (
            <Grid.Col
              span={12}
              xs={6}
              sm={12}
              md={6}
              lg={6}
              key={p.title}
              className={classes[`number${index}`]}
            >
              <Post post={p} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Paper>
  );
}
