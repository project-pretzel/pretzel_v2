import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardActions, CardTitle, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { bindActionCreators } from 'redux';
import { CSSTransitionGroup } from 'react-transition-group';
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
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeave={false}
        >
          <h2 className="trend-headline">
            {this.props.selected}
          </h2>
          <br />
          {feed}
        </CSSTransitionGroup>
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected, feed: state.feed });

const matchDispatchToProps = dispatch => bindActionCreators({ clearFeed }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Rss);
