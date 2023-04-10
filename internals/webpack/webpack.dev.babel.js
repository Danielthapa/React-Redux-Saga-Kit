/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'development',

  // Add hot reloading in development
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js'), // Start with js/app.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    hashFunction: 'sha256',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // Add development plugins
  plugins: [
    new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: 'app/index.html',
    }),
    new Dotenv({
      path: './.env.dev',
      sage: true,
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});