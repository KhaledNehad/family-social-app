import React, { useState } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';
import './leftMenu.css';

const LeftMenu = () => {
  const [activeItem, setActiveItem] = useState();
  const handleItemClick = () => {
    console.log('click');
  };
  return (
    <Menu vertical>
      <Menu.Item>
        <Input placeholder='Search...' />
      </Menu.Item>

      <Menu.Item>
        Home
        <Menu.Menu>
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleItemClick}
          >
            My Profile
          </Menu.Item>
          <Menu.Item
            name='add'
            active={activeItem === 'add'}
            onClick={handleItemClick}
          >
            Add Post
          </Menu.Item>
          <Menu.Item
            name='Events'
            active={activeItem === 'Events'}
            onClick={handleItemClick}
          >
            Events
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item
        name='browse'
        active={activeItem === 'browse'}
        onClick={handleItemClick}
      >
        <Icon name='grid layout' />
        Browse
      </Menu.Item>
      <Menu.Item
        name='groups'
        active={activeItem === 'groups'}
        onClick={handleItemClick}
      >
        Groups
      </Menu.Item>

      <Dropdown item text='More'>
        <Dropdown.Menu>
          <Dropdown.Item icon='edit' text='Edit Profile' />
          <Dropdown.Item icon='globe' text='Choose Language' />
          <Dropdown.Item icon='settings' text='Account Settings' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default LeftMenu;
