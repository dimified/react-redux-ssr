const nodeExternals = require('webpack-node-externals');
const { resolve } = require('path');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Configuration
 * ------------------------------------------------------ */
const dist = 'dist';
const src = 'src';

const publicPath = '/';
const filename = 'ssr.js';
const path = resolve(__dirname, dist + publicPath);
const context = resolve(__dirname, src);

module.exports = {
  // Name
  name: 'ssr',
  // https://webpack.js.org/configuration/entry-context/#naming

  // The entry point of our src
  entry: './ssr/index.js',
  // https://webpack.js.org/configuration/entry-context/#entry

  // Putting a context to it
  context,
  // https://webpack.js.org/configuration/entry-context/#context

  output: {
    // Destination folder
    path,
    // https://webpack.js.org/configuration/output/#output-path

    publicPath,
    // https://webpack.js.org/configuration/output/#output-publicpath

    // The output bundle
    filename,
    // https://webpack.js.org/configuration/output/#output-filename

    // Configure how the library will be exposed
    libraryTarget: 'commonjs',
    // https://webpack.js.org/configuration/output/#output-librarytarget
  },

  target: 'node',
  // https://webpack.js.org/configuration/target/

  externals: nodeExternals(),
  // https://webpack.js.org/configuration/externals/

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]'
        ])
      }
    ]
  },
  // https://webpack.js.org/configuration/module/#module-rules

  plugins: [
    new ExtractTextPlugin('styles.css')
    // Extract text from bundle into a file
  ]
  // https://webpack.js.org/configuration/plugins/
};
