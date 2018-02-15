import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './Navigation.jsx';
import Landing from './Landing.jsx';
import Trend from './Trend.jsx';
import Rss from './Rss.jsx';

const routes = (
  <div>
    <Route path="/" component={Navigation} />
    <Route exact path="/" component={Landing} />
    <Route path="/trend" component={Trend} />
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
