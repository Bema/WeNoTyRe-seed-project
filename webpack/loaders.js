'use strict';

exports.tsx = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  loader: 'awesome-typescript-loader',
  options: {
    useBabel: true
  }

};

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: function () {
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }
  ],
  exclude: /node_modules/,
};

exports.cssNull = {
  test: /\.css$/,
  use: [
    'null-loader'
  ],
  exclude: /node_modules/,
}

exports.json = {
  test: /\.json$/,
  loader: 'json',
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'raw-loader',
    exclude: /node_modules/,
  };
}
