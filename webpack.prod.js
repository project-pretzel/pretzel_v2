const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  plugins: [
    new UglifyJSPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
