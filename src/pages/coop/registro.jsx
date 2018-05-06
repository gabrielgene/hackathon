import React from 'react';
import Menu from '../client/menu';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    width: '90%',
    marginTop: 16,
  },
});

const Registro = ({ classes }) => (
  <div className={classes.root}>
    <Menu>
      <div style={{ textAlign: 'center' }}>
        <div className={classes.input}>
          <TextField
            className={classes.button}
            label="Usuário"
            margin="normal"
          />
          <TextField
            className={classes.button}
            label="Sacolas"
            margin="normal"
            type="number"
          />
        </div>
        <Button
          className={classes.button}
          variant="raised"
          type="primary"
        >
          Validar Sacolas Recebidas
      </Button>
      </div>
    </Menu>
  </div>
);

export default withStyles(styles)(Registro);
