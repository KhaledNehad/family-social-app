import React from 'react';
import { Item, Label, Rating, Segment } from 'semantic-ui-react';
import Moment from 'react-moment';
import Comments from './Comments';

const PostListItem = ({ post }) => {
  return (
    <Segment>
      <Item.Group link>
        <Item>
          <Item.Image size='tiny' src={post.image} />

          <Item.Content>
            <Item.Header>{post.name}</Item.Header>
            <Item.Meta>
              <span className='cinema'>
                <Moment fromNow ago>
                  {post.date}
                </Moment>{' '}
                ago
              </span>
            </Item.Meta>
            <Item.Description>{post.post}</Item.Description>
            <Item.Extra floated='right'>
              <Rating icon='heart' />
              <Label> Comment</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      {post.comments.length > 0 ? (
        <Segment>
          <Comments comments={post.comments} />
        </Segment>
      ) : (
        ''
      )}
    </Segment>
  );
};

export default PostListItem;
