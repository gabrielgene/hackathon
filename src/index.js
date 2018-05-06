import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from 'material-ui/styles';
// import registerServiceWorker from './registerServiceWorker';

import Dashboard from './pages/market/dashboard';
import Menu from './pages/client/menu';
import CollectProfile from './pages/client/collectProfile';
import Profile from './pages/client/profile';
import Calendar from './pages/client/calendar';
import Learn from './pages/client/learn';
import CoopDashboard from './pages/coop/dashboard';
import Registro from './pages/coop/registro';
import Notification from './pages/coop/notifications';
import CoopBaseCalendar from './pages/coop/calendar';
import Login from './pages/generic/login';
import Instructions from './pages/client/instructions';
import Faq from './pages/client/faq';
import registerServiceWorker from './registerServiceWorker';

import Home from './pages/cidadao/home';

import { createMuiTheme } from 'material-ui/styles';
import { green, teal } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: teal,
  },
});

const CoopCalendar = () => (<Menu><Calendar/></Menu>)

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route exact path='/cidadao/home' component={Home} />
        <Route exact path='/cidadao/instrucoes' component={Instructions} />
        <Route exact path='/cidadao/fale-conosco' component={Faq} />
        <Route exact path='/cidadao/postos/:name' component={CollectProfile} />
        <Route exact path='/cidadao/perfil' component={Profile} />
        <Route exact path='/cidadao/agenda' component={Calendar} />
        <Route exact path='/cidadao/aprenda' component={Learn} />

        <Route exact path='/cooperativa/dashboard' component={CoopDashboard} />
        <Route exact path='/cooperativa/registro' component={Registro} />
        <Route exact path='/cooperativa/notificacoes' component={Notification} />
        <Route exact path='/cooperativa/agenda' component={CoopCalendar} />

        <Route exact path='/empresa' component={Dashboard} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
