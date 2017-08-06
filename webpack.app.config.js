/* global __dirname, require, module */
const webpack = require('webpack');
const { resolve } = require('path');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;
const production = env === 'production';
console.log(`Environment is ${env ? `set to ${env}` : 'not set'}`);

/**
 * Configuration
 * ------------------------------------------------------ */
const dist = 'dist';
const src = 'src';

const publicPath = '/';
const filename = 'app.js';
const path = resolve(__dirname, dist + publicPath);
const context = resolve(__dirname, src);
const contentBase = resolve(__dirname, src);
/* ------------------------------------------------------ */

/**
 * Wrappers
 */

// Rules
function wrappedStyleLoaders() {
  return production ? ExtractTextPlugin.extract([
    'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]'
  ]) : [
    'style-loader',
    'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]'
  ];
}

// Plugins
const productionPlugins = [
  new CleanWebpackPlugin([dist]),
  // Takes care of cleaning output folder when building

  new webpack.HotModuleReplacementPlugin(),
  // Enable HMR globally

  new webpack.NamedModulesPlugin(),
  // Prints more readable module names in the browser console on HMR updates

  new ExtractTextPlugin('styles.css'),
  // Extract text from bundle into a file
];

function environmentPlugins() {
  return production ? productionPlugins : productionPlugins.concat([
      new HtmlWebpackPlugin({
        template: resolve(__dirname, src + '/app/index.html'),
      }),
      // Generates own index.html file in the output folder
  ]);
}

module.exports = {
  // Name
  name: 'client',
  // https://webpack.js.org/configuration/entry-context/#naming

  // The entry point of our src
  entry: './app/index.js',
  // https://webpack.js.org/configuration/entry-context/#entry

  // Putting a context to it
  context,
  // https://webpack.js.org/configuration/entry-context/#context

  output: {

    // Destination folder
    path,
    // https://webpack.js.org/configuration/output/#output-path

    // Necessary for HMR to know where to load the hot update chunks
    publicPath,
    // https://webpack.js.org/configuration/output/#output-publicpath

    // The output bundle
    filename,
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
    contentBase,
    // https://webpack.js.org/configuration/dev-server/#devserver-contentbase

    // Match the output `publicPath`
    publicPath
  },

  // Set of module rules
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: resolve(__dirname, src),
        exclude: resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: wrappedStyleLoaders(),
        exclude: resolve(__dirname, 'node_modules')
      }
    ]
  },
  // https://webpack.js.org/configuration/module/#module-rules

  plugins: environmentPlugins()
  // https://webpack.js.org/configuration/plugins/
};
