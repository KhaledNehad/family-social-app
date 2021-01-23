import React from 'react';
import { Card } from 'semantic-ui-react';
import RecentActivityItem from './RecentActivityItem';

const users = [
  {
    id: 11,
    name: 'Jenny Hess',
    image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
    date: '12 hours ago',
    summary: 'You added Jenny Hess to your coworker group.'
  },
  {
    id: 12,
    name: 'Molly Malone',
    image: 'https://react.semantic-ui.com/images/avatar/small/molly.png',
    date: '3 days ago',
    summary: 'You added Molly Malone as a friend.'
  },
  {
    id: 13,
    name: 'Jenny Hess',
    image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    date: '4 days ago',
    summary: 'You added Elliot Baker to your musicians group.'
  }
];

const RecentActivity = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        {users.map((item) => (
          <RecentActivityItem
            key={item.id}
            name={item.name}
            date={item.date}
            summary={item.summary}
            image={item.image}
          />
        ))}
      </Card.Content>
    </Card>
  );
};

export default RecentActivity;
