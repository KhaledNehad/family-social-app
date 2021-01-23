import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const FriendRequestItem = ({ name, description, meta, image }) => {
  return (
    <>
      <Card.Content>
        <Image floated='left' size='mini' src={image} circular />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </>
  );
};

export default FriendRequestItem;
