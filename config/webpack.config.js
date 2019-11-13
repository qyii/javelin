const path = require('path')
const delDir = require('./del')

delDir('./dist')
console.log('ok')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    home: './src/home.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[chunkhash:8].js'
  }
}