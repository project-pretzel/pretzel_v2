import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from './Navigation.jsx';
import Landing from './Landing.jsx';

const App = () => (
  <MuiThemeProvider>
    <div>
      <Navigation />
      <Landing />
    </div>
  </MuiThemeProvider>
);

export default App;
