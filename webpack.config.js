var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  devtool: 'eval',
  entry: [APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
     loaders : [
       {
         test : /\.jsx?/,
         include : APP_DIR,
         loaders : ['react-hot', 'babel']
      }
    ]
  }
};

module.exports = config;
