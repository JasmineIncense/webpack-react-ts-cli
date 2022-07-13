const { merge } = require('webpack-merge')
const common = require('./index')
// const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(common, {
  mode: 'production',
  
  // webpack v5 开箱即带有最新版本的 terser-webpack-plugin，不需要自定义配置
  // 若要自定义配置，那么仍需要安装 terser-webpack-plugin
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
})