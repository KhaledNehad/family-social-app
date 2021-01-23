import React from 'react';
import { Feed } from 'semantic-ui-react';

const RecentActivityItem = ({ id, image, date, summary }) => {
  return (
    <Feed>
      <Feed.Event key={id}>
        <Feed.Label image={image} />
        <Feed.Content>
          <Feed.Date content={date} />
          <Feed.Summary>{summary}</Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
};

export default RecentActivityItem;
