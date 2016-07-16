var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'eval-source-map',
  entry:  path.join(__dirname, "/app/index.js"),
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  }
};

module.exports = config;
