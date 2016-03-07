var path = require('path');
var webpack = require('webpack');
var babelPresets = require('./babelPresets');

module.exports = {
  entry: './src/js/index',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: babelPresets,
        include: path.join(__dirname, '../src/')
      }
    ]
  }
};