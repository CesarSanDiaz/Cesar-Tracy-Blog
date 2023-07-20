import { Card, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import './post.scss';

export default function Post({ post }) {
  const PF = 'http://localhost:5000/images/';
  return (
    <Card
      shadow='sm'
      radius='lg'
      withBorder
      padding='0'
      href='https://www.google.com'
    >
      <div className='post'>
        <Link to={`/post/${post._id}`}>
          {post.photo && (
            <Image
              className='postImg'
              src={PF + post.photo}
              alt='pic'
              height={350}
            />
          )}
        </Link>
        <div className='postInfo'>
          <div className='postCats'>
            {post.category?.map((c) => {
              return (
                <span className='postCat' key={post.name}>
                  {c.name}
                </span>
              );
            })}
          </div>
          <Link to={`/post/${post._id}`} className='link'>
            <span className='postTitle'>{post.title}</span>
          </Link>
          <hr />
          <span className='postDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className='postDesc'>{post.desc}</p>
      </div>
    </Card>
  );
}
