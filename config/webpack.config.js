var path = require('path');
var webpack = require('webpack');
var babelPresets = require('./babelPresets');

module.exports = {
  entry: './src/js/index',
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
//    library: 'ReactJSPractice',
//    libraryTarget: 'amd'
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