import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { getTrends } from '../actions/index';
import { trendRank } from '../helpers/helpers.jsx';


class Landing extends React.Component {

  componentWillMount() {
    axios.get('/trends')
      .then((response) => {
        const usTrends = response.data;
        this.props.getTrends(usTrends);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // FIXME: handleClick() method not passing params to back end request //
  handleClick(trend) {
    axios.get('/rss', {
      params: {
        q: trend,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    const trends = this.props.trends.map((trend, i) => (
      <span key={trend}>
        <ListItem
          primaryText={trend}
          leftAvatar={trendRank(i)}
          key={trend}
          onClick={() => window.open(`http://google.com/#q=${trend}`)}
        />
        <Divider />
      </span>
    ));

    return (
      <div className="trends">
        <List>
          <Subheader style={{ fontSize: 20 }}>
            Top 20 Google Searches Right Now
          </Subheader>
          {trends}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({ trends: state.trends });

const matchDispatchToProps = dispatch => bindActionCreators({ getTrends }, dispatch);

Landing.propTypes = {
  trends: propTypes.array.isRequired,
  getTrends: propTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
