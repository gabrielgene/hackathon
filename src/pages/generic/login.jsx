import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class Login extends React.Component {
  state = {
    user: '',
    pass: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submit = () => {
    const { user, pass } = this.state;
    if (user === 'cid' && pass === '123') {
      this.props.history.push('/cidadao');
    } else if (user === 'coop' && pass === '123') {
      this.props.history.push('/coop');
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="user"
          value={this.state.user}
          onChange={this.handleChange('user')}
          className={classes.textField}
          label="Usuário"
        />
        <TextField
          id="pass"
          value={this.state.pass}
          onChange={this.handleChange('pass')}
          className={classes.textField}
          label="Senha"
        />
        <Button variant="raised" color="primary" onClick={this.submit}>
          Login
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Login));
