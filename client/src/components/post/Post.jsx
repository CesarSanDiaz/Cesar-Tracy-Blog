import { Badge, Card, Image, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import './post.scss';

export default function Post({ post }) {
  const PF = 'http://localhost:5000/images/';
  return (
    <Card shadow='sm' radius='lg' withBorder p={0}>
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
            <Title order={3}>{post.title}</Title>
          </Link>
          <hr />
          <Badge fz='xs' m='xs' color='blue' variant='filled'>
            {new Date(post.createdAt).toDateString()}
          </Badge>
          <Text align='center' lineClamp={1}>
            {post.desc}
          </Text>
        </div>
      </div>
    </Card>
  );
}
