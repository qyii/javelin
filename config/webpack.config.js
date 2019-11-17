const path = require('path')
const delDir = require('./del')
const HtmlWebpackPlugin = require('html-webpack-plugin')

delDir('./dist')
console.log('ok')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hololive',
      template: 'public/index.html'
    })
  ]
}