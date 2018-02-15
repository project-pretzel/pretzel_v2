import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import { bindActionCreators } from 'redux';
import { clearFeed } from '../actions/index';

class Rss extends React.Component {

  componentWillUnmount() {
    this.props.clearFeed();
  }

  render() {
    let feed;
    if (Array.isArray(this.props.feed)) {
      feed = this.props.feed.map((item, i) => (
        <span key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card>
              <CardHeader
                subtitle={item.publisher}
              />
              <CardTitle title={item.title} titleStyle={{ fontSize: 16 }} />
            </Card>
          </a>
          <br />
        </span>
      ));
    }


    return (
      <div>
        <h3 className="trend-headline">
          {this.props.selected}
        </h3>
        <br />
        {feed}
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected, feed: state.feed });

const matchDispatchToProps = dispatch => bindActionCreators({ clearFeed }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Rss);
