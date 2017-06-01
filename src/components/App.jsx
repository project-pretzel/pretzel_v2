import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation.jsx';
import Landing from './Landing.jsx';
import Rss from './Rss.jsx';

const routes = (
  <div>
    <Route path="/" component={Navigation} />
    <Route exact path="/" component={Landing} />
    <Route path="/trend" component={Rss} />
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
