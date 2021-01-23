import React from 'react';
import { Grid } from 'semantic-ui-react';
import Posts from '../../feature/posts/Posts';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const Hopepage = () => {
  return (
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={3}>
          <LeftMenu />
        </Grid.Column>
        <Grid.Column width={10}>
          <Posts />
        </Grid.Column>
        <Grid.Column width={3}>
          <RightMenu />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Hopepage;
