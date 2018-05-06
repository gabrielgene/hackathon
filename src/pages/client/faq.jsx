import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/NavigateBefore';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    width: '90%',
  },
  root: {
    textAlign: 'center',
  },
  input: {
    width: '90%',
  },
  content: {
    marginTop: 16,
  }
});

const Faq = ({ classes, history }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={() => history.goBack()}>
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Fale Conosco
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.content}>
      <Typography variant="body2" gutterBottom>
        O que acho do ecomuni ?
      </Typography>
      <Typography variant="body2" gutterBottom>
        Como podemos melhorar ?
      </Typography>
      <div className={classes.root}>
        <TextField
          className={classes.input}
          id="name"
          label="Name"
          margin="normal"
        />
      </div>
      <Button className={classes.button} variant="raised" color="primary">
        Enviar
        </Button>
    </div>
  </div>
);

export default withStyles(styles)(Faq);
