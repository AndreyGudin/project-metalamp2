"use strict";

var mode = 'development';

var PugPlugin = require('pug-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var path = require('path');

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

console.log(mode + 'mode');
module.exports = {
  mode: mode,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true
  },
  entry: {
    uiforms: './src/pages/ui-kit/ui-forms/ui-forms.pug',
    uiformsScripts: './src/pages/ui-kit/ui-forms/ui-kit.js'
  },
  devtool: 'source-map',
  plugins: [new PugPlugin({
    modules: [PugPlugin.extractCss({
      filename: 'assets/css/[name].[contenthash:8].css'
    })]
  })],
  module: {
    rules: [{
      test: /\.pug$/,
      loader: PugPlugin.loader,
      options: {
        method: 'render'
      }
    }, {
      test: /\.scss$/,
      use: ["css-loader", "sass-loader"]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      exclude: path.resolve(__dirname, './src/fonts'),
      generator: {
        filename: 'assets/img/[hash][ext][query]'
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
      type: 'asset/resource',
      include: path.resolve(__dirname, './src/fonts'),
      generator: {
        filename: 'assets/fonts/[hash][ext][query]'
      }
    }]
  }
};