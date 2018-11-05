const path = require('path');
const paths = require('./paths');
const devMode = process.env.NODE_ENV || 'development';
// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const KssWebpackPlugin = require('kss-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const kssConfig = {
  source: paths.dist.styles
};
const browserSyncConfig =  {
      // proxy: 'http://test.test'
    }


module.exports = {
  mode: devMode,
  entry: paths.src.entry,
  output: {
    path: paths.dist.root,
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: paths.dist,
    compress: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    // new KssWebpackPlugin(kssConfig),
    new HTMLWebpackPlugin({template: 'src/index.html'}),
    new BrowserSyncPlugin(browserSyncConfig)
  ],
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      // {
      //   test: /\.(jpe?g|png)$/i,
      //   use: [
      //     {
      //       loader: 'responsive-loader',
      //       options: {
      //         adapter: require('responsive-loader/sharp'),
      //         sizes: [300, 600, 1200, 2000],
      //         placeholder: true,
      //         placeholderSize: 50
      //       }
      //     }
      //   ]
      // },
      { test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'},
          // 'postcss-loader',
          {loader: 'sass-loader', options: {includePaths: [path.resolve(__dirname,'node_modules')]}}, // Enable For Sass
          // {loader: 'import-glob-loader', options: {includePaths: ['node_modules']}}
        ]
      }
    ]
  }

}
