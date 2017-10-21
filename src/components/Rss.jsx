import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText } from 'material-ui/Card';
import { bindActionCreators } from 'redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { clearFeed } from '../actions/index';

class Rss extends React.Component {

  componentWillUnmount() {
    this.props.clearFeed();
  }

  render() {
    let feed;
    if (Array.isArray(this.props.feed.item)) {
      feed = this.props.feed.item.map((item, i) => (
        <a href={item.link} key={i} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card>
            <CardText>
              {item.title}
            </CardText>
          </Card>
        </a>
      ));
    }


    return (
      <div>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnter
          transitionLeave={false}
        >
          <h2 className="trend-headline">
            {this.props.selected}
          </h2>
          <div className="trend-feed" style={{ width: '100%' }}>
            <a href={this.props.feed.link} target="_blank" rel="noopener noreferrer">
              <font color="black">{this.props.feed.title}</font>
            </a>
            <div>
              <br />
              {feed}
            </div>
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected, feed: state.feed });

const matchDispatchToProps = dispatch => bindActionCreators({ clearFeed }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Rss);
