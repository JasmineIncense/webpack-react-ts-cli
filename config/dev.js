const { merge } = require('webpack-merge')
const common = require('./index')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
});