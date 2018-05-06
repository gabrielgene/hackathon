import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from 'material-ui/styles';
// import registerServiceWorker from './registerServiceWorker';

import Collect from './pages/client/collect';
import CollectProfile from './pages/client/collectProfile';
import Profile from './pages/client/profile';
import Calendar from './pages/client/calendar';
import Learn from './pages/client/learn';
import Client from './pages/client';
import Coop from './pages/coop';
import Login from './pages/generic/login';

import { createMuiTheme } from 'material-ui/styles';
import { green, teal } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: teal,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route exact path='/cidadao' component={Client} />
        <Route exact path='/cidadao/postos' component={Collect} />
        <Route exact path='/cidadao/postos/:name' component={CollectProfile} />
        <Route exact path='/cidadao/perfil' component={Profile} />
        <Route exact path='/cidadao/agenda' component={Calendar} />
        <Route exact path='/cidadao/aprenda' component={Learn} />

        <Route exact path='/coop' component={Coop} />

        <Route exact path='/market' component={Coop} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
