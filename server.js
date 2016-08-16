/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');

  // 不使用webpack-dev-server打开页面
  // open('http://localhost:' + config.port + '/webpack-dev-server/');
  open('http://localhost:' + config.port + '/');
});
