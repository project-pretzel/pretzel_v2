import React from 'react';
import Navigation from './Navigation';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
            Hey, you guys!
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Landing;
