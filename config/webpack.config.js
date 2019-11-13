const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    home: './src/home.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][chunkhash].js'
  }
}