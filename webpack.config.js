const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const publicPath = '/'
const Dotenv = require('dotenv-webpack')

module.exports = webpackMerge.smart(baseConfig, {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: publicPath
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: '.env'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        configuration: {
          minimize: {
            compress: { warnings: false }
          }
        }
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ]
})
