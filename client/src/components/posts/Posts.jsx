import { Grid, Paper, Title } from '@mantine/core';
import Post from '../../components/post/Post';
// import './posts.scss';
import { createStyles } from '@mantine/core';

export default function Posts({ posts }) {
  const useStyles = createStyles(() => ({
    number0: {
      order: 3,
    },
    number1: {
      order: 2,
    },
    number2: {
      order: 1,
    },
  }));

  const { classes } = useStyles();

  return (
    <Paper radius={0} p='sm'>
      <Title
        className='recentPosts'
        order={2}
        align='center'
        transform='capitalize'
        pb='sm'
      >
        Our latest posts
      </Title>
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
              // className={classes.p}
            >
              <Post post={p} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Paper>
  );
}
