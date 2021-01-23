import React from 'react';
import { Feed, Header, Segment } from 'semantic-ui-react';
import PostListItem from './PostListItem';

const PostsList = ({ posts }) => {
  return (
    <Segment>
      <Header as='h3'>Feeds Section </Header>

      <Feed>
        {posts.length > 0
          ? posts.map((post) => <PostListItem key={post.id} post={post} />)
          : 'No Feeds'}
      </Feed>
    </Segment>
  );
};

export default PostsList;
