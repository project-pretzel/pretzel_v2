import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from './Navigation.jsx';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      // TODO: Implement trends to state
    };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Navigation />
            <br />
            Landing Page...
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Landing;
