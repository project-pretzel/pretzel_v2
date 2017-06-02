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
        <p>
          <a href={this.props.feed.link} target="_blank">{this.props.feed.title}</a>
        </p>
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected, feed: state.feed });

export default connect(mapStateToProps)(Rss);
