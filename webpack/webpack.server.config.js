'use strict';

const path = require('path');
const loaders = require('./loaders');

const NODE_ENV =  process.env.NODE_ENV;
const PORT = process.env.PORT;

module.exports = {
  target: "node",
  context: path.resolve('./src/server'),
  entry: [
    'index.tsx'
  ],

  output: {
    path: path.resolve('./build/server'),
    filename: 'index.js',
  },

  resolve: {
    modules: [
      path.resolve('./src/server'),
      path.resolve('./src/client'),
      'node_modules',
    ],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json'
    ],
  },

  devServer: {
    hot: true,
    inline: true,
    port: PORT,
  },

  module: {
    loaders: [
      loaders.tsx,
      loaders.html,
      loaders.cssNull, // =>  ignore css imports
      loaders.svg,
      loaders.json,
    ],
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  }
};
