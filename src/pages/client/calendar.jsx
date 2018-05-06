import React from 'react';
import Menu from './menu';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

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

const Calendar = ({ classes }) => (
  <Menu>
    <AppBar position="fixed" color="primary">
      <Toolbar>
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
  </Menu>
);

export default withStyles(styles)(Calendar);
