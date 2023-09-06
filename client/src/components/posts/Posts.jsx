import { Divider, Grid, Paper, Title, createStyles } from '@mantine/core';
import Post from '../../components/post/Post';

const useStyles = createStyles((theme) => ({
  posts: {
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      // boxShadow: theme.shadows.lg,
      transform: 'scale(1.015)',
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
    <>
      {}

      <Paper radius={0} p='sm' className={classes.postsPaper}>
        <Title order={2} align='left' p='xs'>
          Posts
        </Title>
        <Divider
          size={0}
          p='1.5px'
          mb='md'
          className={classes.postsDivider}
          // m='auto'
          w='15%'
        />
        <Grid grow gutter='sm'>
          {posts.slice(1, 4).map((p) => {
            return (
              <Grid.Col
                span={12}
                xs={6}
                sm={12}
                md={6}
                lg={6}
                key={p.title}
                className={classes.posts}
              >
                <Post post={p} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
}
