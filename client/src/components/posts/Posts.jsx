import { Grid, Paper, Title, createStyles, rem } from '@mantine/core';
import Post from '../../components/post/Post';

const useStyles = createStyles((theme) => ({
  posts: {
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      // boxShadow: theme.shadows.lg,
      transform: 'scale(1.015)',
    },
  },
  postsTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.myYellow[7]
          : theme.colors.blue[6],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
  postsPaper: {
    backgroundColor: 'transparent',
  },
}));

export default function Posts({ posts }) {
  const { classes } = useStyles();

  return (
    <>
      <Paper radius={0} p='sm' className={classes.postsPaper}>
        <Title order={2} align='left' py='sm' className={classes.postsTitle}>
          Posts
        </Title>
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
