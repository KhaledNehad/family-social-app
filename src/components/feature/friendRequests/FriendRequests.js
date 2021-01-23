import React from 'react';
import { Card } from 'semantic-ui-react';
import FriendRequestItem from './FriendRequestItem';

const requests = [
  {
    id: 11,
    name: 'Steve Sanders',
    image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
    description: 'Steve wants to add you to the group best friends',
    meta: 'Friends of Elliot'
  }
];

const FriendRequests = () => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>Friend Requests</Card.Header>
        </Card.Content>
        {requests.map((request) => (
          <FriendRequestItem
            key={request.id}
            name={request.name}
            image={request.image}
            description={request.description}
            meta={request.meta}
          />
        ))}
      </Card>
    </Card.Group>
  );
};

export default FriendRequests;
