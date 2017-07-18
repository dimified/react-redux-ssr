import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config.client';

// Use bundled server side rendering
const render = require('../dist/assets/ssr.js');
const app = express();

// Use middleware to compile the client side code into client.js
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

// Root path renders application on the server per default
app.get('/', render.default);

const port = 9000;
app.listen(port);
console.log(`Listening on port ${port}`);
