import React, { Fragment } from 'react';
import FriendRequests from '../../feature/friendRequests/FriendRequests';
import RecentActivity from '../../feature/recentActivity/RecentActivity';
import './rightMenu.css';

const RightMenu = () => {
  return (
    <Fragment>
      <RecentActivity />
      <FriendRequests />
    </Fragment>
  );
};

export default RightMenu;
