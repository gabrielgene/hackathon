import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'material-ui/Button';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import { withRouter } from 'react-router';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  buttonFabWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    fontSize: 12,
    width: '47%',
  },
  money: {
    padding: 4,
    paddingLeft: 24,
  },
  moneyText: {
    paddingLeft: 26,
  },
  buttonFab: {
    margin: 16,
  },
  more: {
    textAlign: 'center',
    marginTop: 32,
  },
  link: {
    color: blue[500],
  }
});


const Home = ({ classes, history }) => (
  <div className={classes.root}>
    <List>
      <ListItem>
        <Avatar src="https://avatars3.githubusercontent.com/u/19671668?s=460&v=4" />
        <ListItemText primary="Gabriel Genê" secondary="@gabrielgene" />
      </ListItem>
    </List>
    <div className={classes.buttonWrapper}>
      <Button variant="raised" color="primary" className={classes.button}>
        Gerar e-voucher
      </Button>
      <Button variant="raised" color="primary" className={classes.button}>
        Postos de Coleta
      </Button>
    </div>
    <List>
      <ListItem className={classes.money}>
        <MoneyIcon />
        <ListItemText className={classes.moneyText} secondary="Você tem 12 EcoNicas" />
      </ListItem>
    </List>
    <div>
      <div className={classes.buttonFabWrapper}>
        <Button variant="fab" aria-label="add" className={classes.buttonFab} onClick={() => history.push('/cidadao/instrucoes')}>
          <DeleteIcon />
        </Button>
        <Button variant="fab" aria-label="add" className={classes.buttonFab}>
          <DeleteIcon />
        </Button>
        <Button variant="fab" aria-label="add" className={classes.buttonFab}>
          <DeleteIcon />
        </Button>
      </div>
      <div className={classes.buttonFabWrapper}>
        <Button variant="fab" aria-label="add" className={classes.buttonFab}>
          <DeleteIcon />
        </Button>
        <Button variant="fab" aria-label="add" className={classes.buttonFab}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
    <div className={classes.more}>
      <Typography className={classes.link} variant="subheading" gutterBottom>
        Como usar
      </Typography>
      <Typography
        className={classes.link}
        variant="subheading"
        gutterBottom
        onClick={() => history.push('/cidadao/fale-conosco')}
      >
        Fale Conosco
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(withRouter(Home));
