const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  plugins: [
    new UglifyJSPlugin(),
  ],
});
