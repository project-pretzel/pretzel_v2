import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import moment from 'moment';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { getTrends, selectTrend, getRss } from '../actions/index';
import { trendRank } from '../helpers/helpers.jsx';
import Rss from './Rss.jsx';

const time = moment().format('dddd, MMMM Do YYYY, h:mma');

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

  render() {
    const trends = this.props.trends.map((trend, i) => (
      <span key={trend} style={{ paddingTop: 100 }}>
        <ListItem
          value={trend}
          primaryText={trend}
          leftAvatar={trendRank(i)}
          key={trend}
          onClick={() => {
            this.props.selectTrend(trend);
            axios('/rss', { params: { q: trend } })
              .then((response) => {
                const feed = response.data.splice(1, 10);
                this.props.getRss(feed);
              })
              .catch(error => console.error(error));
          }}
        />
        <Divider />
      </span>
    ));

    return (
      <div className="trends">
        <List>
          <div className="time">
            <Subheader style={{ fontSize: 16 }}>
              Top 20 Google Searches Right Now
              <span style={{ float: 'right', paddingRight: 20 }}>
                {time}
              </span>
            </Subheader>
          </div>
          <div style={{ width: '50%', float: 'left' }}>
            {trends}
          </div>
        </List>
        <div style={{ width: '50%', float: 'right' }}>
          <Rss />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ trends: state.trends });

const matchDispatchToProps = dispatch => bindActionCreators({ getTrends, selectTrend, getRss }, dispatch);

Landing.propTypes = {
  trends: propTypes.array.isRequired,
  getTrends: propTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
