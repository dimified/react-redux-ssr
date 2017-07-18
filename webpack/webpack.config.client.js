/* global __dirname, require, module */
const { publicPath, path, context, rules, plugins } = require('./common.config');
const webpack = require('webpack');
const { resolve } = require('path');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // Name
  name: 'client',
  // https://webpack.js.org/configuration/entry-context/#naming

  context,

  // The entry point of our app
  entry: './index.js',
  // https://webpack.js.org/configuration/entry-context/#entry

  output: {
    path,
    publicPath,

    // The output bundle
    filename: 'client.js',
    // https://webpack.js.org/configuration/output/#output-filename
  },

  devtool: 'inline-source-map',
  // https://webpack.js.org/configuration/devtool

  devServer: {
    // Specify host, e.g. '0.0.0.0'
    host: 'localhost',
    // https://webpack.js.org/configuration/dev-server/#devserver-host-cli-only

    // Specify port
    port: 3000,
    // https://webpack.js.org/configuration/dev-server/#devserver-port-cli-only

    // Enable HMR
    hot: true,
    // https://webpack.js.org/configuration/dev-server/#devserver-hot

    // Match the output path
    contentBase: resolve(__dirname, '../dist/assets'),
    // https://webpack.js.org/configuration/dev-server/#devserver-contentbase

    // Match the output `publicPath`
    publicPath
  },

  module: {
    rules
  },

  plugins: [
    ...plugins,

    new CleanWebpackPlugin(['dist']),
    // Takes care of cleaning output folder when building

    new webpack.HotModuleReplacementPlugin(),
    // Enable HMR globally

    new webpack.NamedModulesPlugin(),
    // Prints more readable module names in the browser console on HMR updates
  ]
};
