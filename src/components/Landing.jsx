import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { getTrends } from '../actions/index';
import { selectTrend } from '../actions/index';
import { trendRank } from '../helpers/helpers.jsx';


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
    const time = moment().format('dddd, MMMM Do YYYY, h:mma');
    const trends = this.props.trends.map((trend, i) => (
      <span key={trend}>
        <Link
          to={`/trend/${trend}`}
          style={{ textDecoration: 'none' }}
        >
          <ListItem
            value={trend}
            primaryText={trend}
            leftAvatar={trendRank(i)}
            key={trend}
            onClick={() => {
              this.props.selectTrend(trend);
              axios('/rss', {
                params: {
                  q: trend,
                },
              })
              .then(response => console.log(response))
              .catch(error => console.error(error));
            }}
          />
        </Link>
        <Divider />
      </span>
    ));

    return (
      <div className="trends">
        <Paper zDepth={4} style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}> <List>
          <Subheader style={{ fontSize: 16 }}>
            Top 20 Google Searches Right Now
            <span style={{ float: 'right', paddingRight: 20 }}>
              {time}
            </span>
          </Subheader>
          {trends}
        </List>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({ trends: state.trends });

const matchDispatchToProps = dispatch => bindActionCreators({ getTrends, selectTrend }, dispatch);

Landing.propTypes = {
  trends: propTypes.array.isRequired,
  getTrends: propTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
