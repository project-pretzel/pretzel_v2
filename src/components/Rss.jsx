import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class Rss extends React.Component {


  render() {
    let feed;
    console.log(this.props.feed);
    if (Array.isArray(this.props.feed.item)) {
      feed = this.props.feed.item.map((item, i) => (
        <Card key={i}>
          <CardText>
            {item.title}
          </CardText>
        </Card>
      ));
    }


    return (
      <div>
        <h2 className="trend-headline">
          {this.props.selected}
        </h2>
        <div className="trend-feed" style={{ width: '50%' }}>
          <a href={this.props.feed.link} target="_blank"><font color="black">{this.props.feed.title}</font></a>
          <div>
            {feed}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected, feed: state.feed });

export default connect(mapStateToProps)(Rss);
