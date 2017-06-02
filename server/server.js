const express = require('express');
const request = require('request');
const webpack = require('webpack');
const parser = require('xml2json');
const morgan = require('morgan');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;


const app = express();
mongoose.connect('mongodb://localhost/pretzel');

const compiler = webpack(webpackConfig);

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../www')));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/trends', (req, res) => {
  request('https://trends.google.com/trends/hottrends/visualize/internal/data', (error, response) => {
    if (!error && response.statusCode === 200) {
      const top20Trends = JSON.parse(response.body).united_states;
      res.json(top20Trends);
    } else {
      res.json(error);
    }
  });
});

app.get('/rss', (req, res) => {
  request(`https://news.google.com/news?cf=all&hl=en&pz=1&&ned=us&output=rss&q=${req.query.q}`, (error, response) => {
    if (!error && response.statusCode === 200) {
      const jsonFeed = parser.toJson(response.body);
      res.json(JSON.parse(jsonFeed));
    } else {
      res.json(error);
    }
  });
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log(`We creepin' at http://localhost:${port}`);
});