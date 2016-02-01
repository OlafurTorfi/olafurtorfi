const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

// plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;

// server address
const SERVER_HOST = 'localhost';
const SERVER_PORT = '3000';


module.exports = {
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  entry: {
    bundle: [
      `webpack-dev-server/client?http://${SERVER_HOST}:${SERVER_PORT}`,
      './app/boot'
    ],
    vendor: [
      'es6-shim',
      'angular2/bundles/angular2-polyfills',
      'angular2/common',
      'angular2/core',
      'angular2/http',
      'angular2/platform/browser',
      'angular2/router',
      'rxjs'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./app')
  },

  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'app/components')], loader: 'raw!postcss-loader!sass'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'app/style')], loader: 'style!css!postcss-loader!sass'},
      {test: /\.ts$/, exclude: [/\.spec\.ts$/, /node_modules/], loader: 'ts'}
    ],

    noParse: [
      /angular2\/bundles\/.+/
    ]
  },

  postcss: [
    autoprefixer({ browsers: ['last 3 versions', 'Firefox ESR'] })
  ],

  sassLoader: {
    outputStyle: 'nested',
    precision: 10,
    sourceComments: false
  },

  plugins: [
    new OccurenceOrderPlugin(),
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './app/index.html'
    })
  ],

  devServer: {
    contentBase: './app',
    historyApiFallback: true,
    host: SERVER_HOST,
    inline: true,
    port: SERVER_PORT,
    publicPath: '/',
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  }
};
