import Post from '../post/Post';
import './posts.scss';

export default function Posts({ posts }) {
  return (
    <>
      <div className='recentPosts'>recent posts</div>
      <div className='posts1'>
        {posts.map((p) => {
          return (
            <div key={p.title}>
              <Post post={p} />
            </div>
          );
        })}
      </div>
    </>
  );
}
