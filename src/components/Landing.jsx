import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { getTrends } from '../actions/index';
import { trendRank } from '../helpers/helpers.jsx';
import Rss from './Rss.jsx';


class Landing extends React.Component {

  componentDidMount() {
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
  // handleClick(trend) {
  //   axios.get('/rss', {
  //     params: {
  //       q: trend,
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // }

  render() {
    const time = moment().format('dddd, MMMM Do YYYY, h:mma');
    const trends = this.props.trends.map((trend, i) => (
      <span key={trend}>
        <Link to={`/rss/${trend}`} style={{ textDecoration: 'none' }}>
          <ListItem
            primaryText={trend}
            leftAvatar={trendRank(i)}
            key={trend}
          />
        </Link>
        <Divider />
      </span>
    ));

    return (
      <div className="trends">
        <List>
          <Subheader style={{ fontSize: 20 }}>
            Top 20 Google Searches Right Now
            <br />
            {time}
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
