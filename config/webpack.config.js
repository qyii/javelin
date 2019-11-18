const path = require('path')
const delDir = require('./del')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

delDir('./dist')
console.log('ok')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use:[
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 6234
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hololive',
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: './style/[name].[chunkhash:8].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  ]
}
