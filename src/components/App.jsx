import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation.jsx';
import Landing from './Landing.jsx';

const routes = (
  <div>
    <Route path="/" component={Navigation} />
    <Route exact path="/" component={Landing} />
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <HashRouter>
      {routes}
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
