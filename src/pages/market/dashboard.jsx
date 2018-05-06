import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import AddIcon from '@material-ui/icons/Warning';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: 15,
    right: 15,
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class Dashboard extends React.Component {
  state = {
    open: false,
    vertical: null,
    horizontal: null,
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { vertical, horizontal, open } = this.state;
    return (
      <div style={{ backgroundColor: '#ffffff' }}>
        <img style={{ height: 390 }} src="https://files.slack.com/files-pri/T024ZJBML-FAL4A5VMM/whatsapp_image_2018-05-06_at_7.43.12_am.jpeg" />
        <img style={{ height: 190 }} src="https://profalves.github.io/Ecomuni-HackathonUJ/images/econicaCres.jpeg" />
        <img style={{ height: 375, marginBottom: 56 }} src="https://profalves.github.io/Ecomuni-HackathonUJ/images/compResiduo.jpeg" />
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}
          onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}>
          <AddIcon />
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Cooperativa Notificada</span>}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
