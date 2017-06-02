import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';

class Rss extends React.Component {


  render() {
    let feed;
    console.log(this.props.feed);
    if (Array.isArray(this.props.feed.item)) {
      feed = this.props.feed.item.map((item, i) => (
        <a href={item.link} key={i} target="_blank" style={{ textDecoration: 'none' }}>
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
        <h2 className="trend-headline">
          {this.props.selected}
        </h2>
        <div className="trend-feed" style={{ width: '50%' }}>
          <a href={this.props.feed.link} target="_blank">
            <font color="black">{this.props.feed.title}</font>
          </a>
          <div>
            <br />
            {feed}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({ selected: state.selected, feed: state.feed });

export default connect(mapStateToProps)(Rss);
