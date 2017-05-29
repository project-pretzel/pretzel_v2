import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation.jsx';
import Landing from './Landing.jsx';

const routes = (
  <div>
    <Route path="/" component={Navigation} />
    <Route path="/" component={Landing} />
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;
