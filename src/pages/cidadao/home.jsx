import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'material-ui/Drawer';
import Tabs, { Tab } from 'material-ui/Tabs';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import DateIcon from '@material-ui/icons/DateRange';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import Divider from 'material-ui/Divider';
import Delete from '@material-ui/icons/Delete';
import { withRouter } from 'react-router';
import { markets } from '../../utils/markets';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import yellow from 'material-ui/colors/yellow';
import green from 'material-ui/colors/green';
import Next from '@material-ui/icons/NavigateNext';

const styles = {
  root: {
    width: '100%',
    marginTop: 104,
    backgroundColor: '#f5f5f5',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  tab1: {
    marginTop: 104,
  },
  papel: {
    backgroundColor: blue[400],
  },
  plastico: {
    backgroundColor: red[400],
  },
  vidro: {
    backgroundColor: green[400],
  },
  metal: {
    backgroundColor: yellow[400],
  },
};

function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

class Menu extends React.Component {
  state = {
    open: false,
    value: 0,
  };

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, history } = this.props;
    const { value } = this.state

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              E-Comuni
            </Typography>
          </Toolbar>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Descartar Residuos" />
            <Tab label="Gerar e-voucher" />
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer>
            <div className={classes.tab1}>
              <List>
                <ListItem onClick={() => history.push('/cidadao/instrucoes')}>
                  <Avatar className={classes.papel}>
                    <Delete />
                  </Avatar>
                  <ListItemText primary="Papel" />
                  <ListItemSecondaryAction onClick={() => history.push('/cidadao/instrucoes')}>
                    <IconButton aria-label="Comments">
                      <Next />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem onClick={() => history.push('/cidadao/instrucoes')}>
                  <Avatar className={classes.plastico}>
                    <Delete />
                  </Avatar>
                  <ListItemText primary="Plastico" />
                  <ListItemSecondaryAction onClick={() => history.push('/cidadao/instrucoes')}>
                    <IconButton aria-label="Comments">
                      <Next />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem onClick={() => history.push('/cidadao/instrucoes')}>
                  <Avatar className={classes.vidro}>
                    <Delete />
                  </Avatar>
                  <ListItemText primary="Vidro" />
                  <ListItemSecondaryAction onClick={() => history.push('/cidadao/instrucoes')}>
                    <IconButton aria-label="Comments">
                      <Next />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem onClick={() => history.push('/cidadao/instrucoes')}>
                  <Avatar className={classes.metal}>
                    <Delete />
                  </Avatar>
                  <ListItemText primary="Metal" />
                  <ListItemSecondaryAction onClick={() => history.push('/cidadao/instrucoes')}>
                    <IconButton aria-label="Comments">
                      <Next />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </List>
            </div>
          </TabContainer>
        }
        {value === 1 &&
          <TabContainer>
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
          </TabContainer>
        }
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <List className={classes.list}>
              <ListItem onClick={() => history.push('/cidadao/home')}>
                <Avatar>
                  <HomeIcon />
                </Avatar>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem onClick={() => history.push('/cidadao/fale-conosco')}>
                <Avatar>
                  <ChatIcon />
                </Avatar>
                <ListItemText primary="Fale Conosco" />
              </ListItem>
              <ListItem onClick={() => history.push('/cidadao/agenda')}>
                <Avatar>
                  <DateIcon />
                </Avatar>
                <ListItemText primary="Horários de Coleta" />
              </ListItem>
              <Divider />
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Menu));
