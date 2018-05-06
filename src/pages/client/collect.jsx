import React from 'react';
import Menu from './menu';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';
import { markets } from '../../utils/markets';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 56,
    marginBottom: 56,
    backgroundColor: '#f5f5f5',
  },
});

const Collect = ({ classes, history }) => (
  <Menu>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Postos de Coleta
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.root}>
      <List>
        {
          markets.map(m => (
            <div key={m.id}>
              <ListItem onClick={() => history.push(`/cidadao/postos/${m.id}`)}>
                <Avatar>
                  <WorkIcon />
                </Avatar>
                <ListItemText primary={m.name} />
              </ListItem>
              <Divider />
            </div>
          ))
        }
      </List>
    </div>
  </Menu>
);

export default withStyles(styles)(withRouter(Collect));
