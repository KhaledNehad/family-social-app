import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
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
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/messages'
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/friends'
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
        </BrowserRouter>
      </Menu>
    </Segment>
  );
};

export default Navbar;
