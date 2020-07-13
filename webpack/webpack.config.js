const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: src code
  // output: output code (default: dist folder)
  entry: path.join(__dirname, 'src/main.js'),
  // entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ]
}