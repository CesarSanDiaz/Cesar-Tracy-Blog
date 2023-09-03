// import { Grid } from '@mantine/core';
// import PostSidebar from '../../components/sidebar/PostSidebar';
import SinglePost from '../../components/singlePost/SinglePost';

export default function Single() {
  return (
    <div className='single'>
      {/* <Grid m={0}>
        <Grid.Col span={9}> */}
      <SinglePost />
      {/* </Grid.Col>
        <Grid.Col span={3}>
          <PostSidebar />
        </Grid.Col>
      </Grid> */}
    </div>
  );
}
