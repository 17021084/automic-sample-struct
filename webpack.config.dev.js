'use strict'

const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const publicPath = '/'
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = webpackMerge.smart(baseConfig, {
  entry: [
    'regenerator-runtime/runtime',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: publicPath
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 5050,
    historyApiFallback: true,
    stats: 'minimal'
  },
  watchOptions: {
    poll: 1000,
    ignored: ['node_modules']
  },
  plugins: [
    new Dotenv({
      path: '.env'
    })
  ]
})
