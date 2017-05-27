import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import axios from 'axios';

import Navigation from './Navigation.jsx';

const trendRank = i => (
  <div style={{ background: 'maroon', width: 40, height: 40, lineHeight: '40px', textAlign: 'center' }}>
    <font color="white" size="4">
      {i + 1}
    </font>
  </div>
);

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
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
    const trends = this.state.trends.map((trend, i) => (
      <span key={trend}>
        <ListItem
          primaryText={trend}
          leftAvatar={trendRank(i)}
          key={trend}
          onClick={() => console.info(`You clicked on ${trend}`)}
        />
        <Divider />
      </span>
    ));

    return (
      <MuiThemeProvider>
        <div className="trends">
          <List>
            <Subheader style={{ fontSize: 20 }}>
              Top 20 Google Searches Right Now
            </Subheader>
            {trends}
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Landing;
