import { Paper, Text, Title } from '@mantine/core';
import Post from '../post/Post';
import './posts.scss';

export default function Posts({ posts }) {
  return (
    <Paper radius={0} p='sm'>
      <Title
        className='recentPosts'
        order={2}
        align='center'
        transform='capitalize'
        pb='sm'
      >
        recent posts
      </Title>
      <div className='posts1'>
        {posts.map((p) => {
          return (
            <div key={p.title}>
              <Post post={p} />
            </div>
          );
        })}
      </div>
    </Paper>
  );
}
