import { Divider, Grid, Paper, Title } from '@mantine/core';
import Post from '../../components/post/Post';
// import './posts.scss';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  number0: {
    order: 3,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      boxShadow: theme.shadows.lg,
      transform: 'scale(1.025)',
    },
  },
  number1: {
    order: 2,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      boxShadow: theme.shadows.lg,
      transform: 'scale(1.025)',
    },
  },
  number2: {
    order: 1,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      boxShadow: theme.shadows.lg,
      transform: 'scale(1.025)',
    },
  },
}));

export default function Posts({ posts }) {
  const { classes } = useStyles();

  return (
    <Paper radius={0} p='sm'>
      <Title className='recentPosts' order={2} align='center' p='xs'>
        Our Latest Posts
      </Title>
      <Divider size='lg' pb='md' color='blue' />
      <Grid className='posts1' grow gutter='sm'>
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
