import { Divider, Title, createStyles } from '@mantine/core';
import { IconTag } from '@tabler/icons-react';
// import RtfMantine from '../components/tiptap/RtfMantine';
import { usePostContext } from '../context/PostsContext';

const useStyles = createStyles((theme) => ({
  catDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  catTopIcon: {
    display: 'block',
    margin: 'auto',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

export default function Categories() {
  const { classes } = useStyles();
  const { posts } = usePostContext();

  return (
    <div style={{ padding: '12px' }}>
      <IconTag size={50} className={classes.catTopIcon} />
      <Title order={2} align='center' p='xs'>
        Categories
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.catDivider}
        m='auto'
        w='25%'
      />
      {/* <RtfMantine /> */}
      {posts.map((post) => {
        return <li>{post.title}</li>;
      })}
    </div>
  );
}
