import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';
import { withRouter } from 'react-router';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

class Menu extends React.Component {
  state = {
    value: '',
  }

  componentWillMount() {
    this.setState({ value: this.props.location.pathname })
  }

  handleChange = (_, value) => {
    this.props.history.push(value)
    this.setState({ value });
  }

  render() {
    const { classes, children } = this.props;
    const { value } = this.state;

    return (
      <div>
        {children}
        <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>
          <BottomNavigationAction label="Dashboard" value="/cooperativa/dashboard" icon={<Icon>dashboard</Icon>} />
          <BottomNavigationAction label="Registro" value="/cooperativa/registro" icon={<Icon>person</Icon>} />
          <BottomNavigationAction label="Calendario" value="/cooperativa/agenda" icon={<Icon>date_range</Icon>} />
        </BottomNavigation>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Menu));
