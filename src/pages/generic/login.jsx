import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import { withRouter } from 'react-router';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: '90%',
    marginTop: 16,
    height: '90vh',
    textAlign: 'center',
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
  menu: {
    width: 200,
  },
  title: {
    marginTop: 100,
  },
  button: {
    marginTop: 16,
    width: '90%'
  }
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
      this.props.history.push('/cidadao/home');
    } else if (user === 'coop' && pass === '123') {
      this.props.history.push('/coop');
    } else if (user === 'emp' && pass === '123') {
      this.props.history.push('/empresa');
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.cardWrapper}>
        <Card className={classes.card}>
          <Typography className={classes.title} variant="title" gutterBottom>
            E-comuni
          </Typography>

          <TextField
            id="user"
            autoComplete="off"
            value={this.state.user}
            onChange={this.handleChange('user')}
            className={classes.textField}
            label="Usuário"
          />
          <TextField
            id="pass"
            type="password"
            autoComplete="off"
            value={this.state.pass}
            onChange={this.handleChange('pass')}
            className={classes.textField}
            label="Senha"
          />
          <Button variant="raised" className={classes.button} color="primary" onClick={this.submit}>
            Login
          </Button>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Login));
