const { resolve } = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // Necessary for HMR to know where to load the hot update chunks
  // output.publicPath
  publicPath: '/assets/',
  // https://webpack.js.org/configuration/output/#output-publicpath

  // Destination folder
  // output.path
  path: resolve(__dirname, '../dist/assets'),
  // https://webpack.js.org/configuration/output/#output-path

  // Putting a context to it
  context: resolve(__dirname, '../app'),
  // https://webpack.js.org/configuration/entry-context/#context

  // Set of rules
  rules: [
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: resolve(__dirname, '../app'),
      exclude: resolve(__dirname, '../node_modules')
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]'
          ]
      }),
      exclude: resolve(__dirname, '../node_modules')
    },
  ],
  // https://webpack.js.org/configuration/module/#module-rules

  // Plugins
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
  // https://webpack.js.org/configuration/plugins/
};
