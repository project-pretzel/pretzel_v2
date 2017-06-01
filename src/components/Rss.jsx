import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTrend } from '../actions/index';

// TODO: Implement RSS feed
class Rss extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.selected}
        </h2>
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected });

export default connect(mapStateToProps)(Rss);
