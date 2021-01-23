import React, { useState } from 'react';
import { Icon, Image, Menu, Segment } from 'semantic-ui-react';
import { BrowserRouter, Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <BrowserRouter>
          <Menu.Item>Yohoo</Menu.Item>
          <Menu.Item
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
            icon='home'
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/messages'
            name='messages'
            icon='envelope'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/friends'
            name='friends'
            icon='users'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
        </BrowserRouter>
        <Menu.Menu position='right'>
          <Menu.Item name='logout' icon='sign-out' />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Navbar;
