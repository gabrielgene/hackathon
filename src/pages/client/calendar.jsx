import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/NavigateBefore';
import { withRouter } from 'react-router';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 7,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
});

const Calendar = ({ classes, history }) => (
  <div>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={() => history.goBack()}>
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Agenda de coleta de lixo
        </Typography>
      </Toolbar>
    </AppBar>

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dia</TableCell>
            <TableCell>Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Segunda</TableCell>
            <TableCell>08:30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Segunda</TableCell>
            <TableCell>23:30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Terça</TableCell>
            <TableCell>08:30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Terça</TableCell>
            <TableCell>22:30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Segunda</TableCell>
            <TableCell>08:30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Segunda</TableCell>
            <TableCell>08:30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Segunda</TableCell>
            <TableCell>08:30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>

  </div>
);

export default withStyles(styles)(withRouter(Calendar));
