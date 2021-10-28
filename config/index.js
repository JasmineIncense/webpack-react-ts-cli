const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname, '..')
const APP_PATH = path.resolve(__dirname, '../src')

module.exports = {
  entry: {
    main: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /(\.js|\.jsx)$/,
        include: APP_PATH,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello Webpack'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}