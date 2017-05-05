'use strict';

const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');
const plugins = require('./plugins');

const NODE_ENV =  process.env.NODE_ENV;
const PORT = process.env.PORT;

const applicationEntries = NODE_ENV === 'development'

module.exports = {
  context: path.resolve('./src/client'),
  entry: [
    'index.tsx'
  ],

  output: {
    path: path.resolve('./build/client'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    modules: [
      path.resolve('./src/client'),
      'node_modules',
    ],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx'
    ],
  },

  devServer: {
    hot: true,
    inline: true,
    port: PORT,
    historyApiFallback: { index: '/' },
    proxy: { '/api/*': `http://localhost:3000` },
  },

  plugins: plugins,

  module: {
    loaders: [
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.json,
    ],
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  }
};
