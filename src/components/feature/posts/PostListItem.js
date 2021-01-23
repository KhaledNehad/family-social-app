import React from 'react';
import {
  Button,
  Feed,
  Image,
  Item,
  Label,
  Rating,
  Segment
} from 'semantic-ui-react';
import Moment from 'react-moment';

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
              <Label>Comment</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default PostListItem;
