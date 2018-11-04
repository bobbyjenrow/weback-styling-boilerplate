var path = require('path')

exports.src = {
  root: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/js/index.js'),
  js: path.resolve(__dirname, 'src/js'),
  styles: path.resolve(__dirname, 'src/scss'),
}
exports.dist = {
  root: path.resolve(__dirname, 'dist'),
  js: path.resolve(__dirname, 'dist/js'),
  styles: path.resolve(__dirname, 'dist/css'),
}
