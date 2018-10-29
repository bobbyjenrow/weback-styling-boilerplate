const path = require('path');
const paths = require('./paths');
const config = require('./config.js');
const devMode = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');


module.exports = {
  mode: devMode,
  entry: paths.src.entry,
  output: {
    path: paths.dist.root,
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: paths.dist.root,
    compress: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new HtmlWebpackPlugin({
      title: config.app.title,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      filename: "index.html",
      template: 'src/index.html'
    }),
    // new HtmlWebpackIncludeAssetsPlugin({ assets: ['styles/styles.css'], append: true })
  ],
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader', options: {importLoaders: 1}},
          {loader: 'import-glob-loader'},
          {loader: 'postcss-loader', options: {sourcemap:true}},
          // {loader: 'sass-loader'}, // Enable For Sass
        ]
      }
    ]
  }

}
