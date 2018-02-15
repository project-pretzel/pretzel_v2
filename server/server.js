const express = require('express');
const request = require('request');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const GoogleNewsRss = require('google-news-rss');

const googleNews = new GoogleNewsRss();

const app = express();

const compiler = webpack(webpackConfig);

// app.use(morgan('dev'));

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
  googleNews
    .search(req.query.q)
    .then(resp => res.json(resp));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`We creepin' at http://localhost:${port}`);
});
