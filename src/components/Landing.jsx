import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

import Navigation from './Navigation.jsx';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      // TODO: Implement trends to state
      trends: [],
    };
  }

  componentWillMount() {
    axios.get('/trends')
      .then((response) => {
        const usTrends = response.data;
        this.setState({ trends: usTrends });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const trends = this.state.trends.map((trend, i) =>
      <li key={i}>{trend}</li>,
    );

    return (
      <MuiThemeProvider>
        <div>
          <Navigation />
          <br />
          {trends}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Landing;
