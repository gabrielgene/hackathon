import React from 'react';
import Menu from './menu';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Profile = () => (
  <Menu>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Perfil
        </Typography>
      </Toolbar>
    </AppBar>
  </Menu>
);

export default Profile;
