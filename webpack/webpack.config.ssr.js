const { publicPath, path, context, rules, plugins } = require('./common.config');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Name
  name: 'ssr',
  // https://webpack.js.org/configuration/entry-context/#naming

  context,

  // The entry point of our app
  entry: './ssr.js',
  // https://webpack.js.org/configuration/entry-context/#entry

  output: {
    path,
    publicPath,

    // The output bundle
    filename: 'ssr.js',
    // https://webpack.js.org/configuration/output/#output-filename

    // Configure how the library will be exposed
    libraryTarget: 'commonjs2',
    // https://webpack.js.org/configuration/output/#output-librarytarget
  },

  target: 'node',
  // https://webpack.js.org/configuration/target/

  externals: nodeExternals(),
  // https://webpack.js.org/configuration/externals/

  module: {
    rules
  },

  plugins
};
