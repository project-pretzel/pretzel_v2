import React from 'react';
import { connect } from 'react-redux';

// TODO: Implement RSS feed
class Rss extends React.Component {
  render() {
    return (
      <div>
        <h2 className="trend-headline">
          {this.props.selected}
        </h2>
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected });

export default connect(mapStateToProps)(Rss);
