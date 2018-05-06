import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import MenuIcon from '@material-ui/icons/NavigateBefore';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Escolha o posto coleta', 'Quantidade de sacos'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return (
        <img style={{ height: 147, width: 178, marginLeft: 14 }} alt="oi" src="https://files.slack.com/files-pri/T024ZJBML-FAJAMNCEL/image.png" />
      );
    case 3:
      return (
        <div>
          <TextField
            autoComplete="off"
            id="name"
            label="Quantidade"
            margin="normal"
            type="number"
          />
        </div>
      );
    default:
      return 'Unknown step';
  }
}

class Instructions extends React.Component {
  state = {
    activeStep: 0,
    open: false,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  finish = () => {
    this.setState({ open: true });
    setTimeout(() => this.props.history.push('/cidadao/home'), 1500);
  };

  render() {
    const { classes, history } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={() => history.goBack()}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Instruções de coleta
            </Typography>
          </Toolbar>
        </AppBar>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography component="div">{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Voltar
                      </Button>
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={activeStep === steps.length - 1 ? this.finish : this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Entregar' : 'Próximo'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Entregue com sucesso!</span>}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Instructions);
