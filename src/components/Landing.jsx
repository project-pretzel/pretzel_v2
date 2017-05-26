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
      <MuiThemeProvider>
        <div>
          <Navigation />
          <h4>Landing page...</h4>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Landing;
