/* global __dirname, require, module */

const webpack = require('webpack');
const { resolve } = require('path');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  // Putting a context to it

  entry: [
    './index.js'
    // The entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // The output bundle

    path: resolve(__dirname, 'dist'),
    // Destination folder

    publicPath: '/'
    // Necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  devServer: {
    host: 'localhost',
    port: 3000,

    hot: true,
    // Enable HMR on the server

    contentBase: resolve(__dirname, 'dist'),
    // Match the output path

    publicPath: '/'
    // Match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?modules',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
    // Generates own index.html file in the output folder

    new CleanWebpackPlugin(['dist']),
    // Takes care of cleaning output folder when building

    new webpack.HotModuleReplacementPlugin(),
    // Enable HMR globally

    new webpack.NamedModulesPlugin(),
    // Prints more readable module names in the browser console on HMR updates
  ]
};
