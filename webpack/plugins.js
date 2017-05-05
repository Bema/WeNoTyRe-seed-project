const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourceMap = process.env.TEST || process.env.NODE_ENV !== 'production'
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.tsx?$/ })]
  : [];

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),

  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: 'body',
  }),

  new CopyWebpackPlugin([
    { from: 'assets', to: 'assets' },
  ]),

  new ExtractTextPlugin('styles.[hash].css')

].concat(sourceMap);

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new StyleLintPlugin({
    configFile: path.resolve('./.stylelintrc'),
    files: ['**/*.css'],
    failOnError: false,
  }),
];

const prodPlugins = [
  new SplitByPathPlugin([
    { name: 'vendor', path: [path.resolve('./node_modules')] },
  ]),
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false,
  //   },
  //   sourceMap: true
  // }),
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
