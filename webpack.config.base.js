'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SvgStore = require('webpack-svgstore-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

const BASE_DIR = __dirname

module.exports = {
  entry: {
    app: path.join(BASE_DIR, 'src', 'index.js'),
    vendor: ['react', 'react-dom'],
    polyfills: ['es6-shim', 'whatwg-fetch']
  },
  output: {
    publicPath: '/',
    path: path.resolve(BASE_DIR, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js'
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      basedir: path.resolve(BASE_DIR),
      hooks: path.resolve(BASE_DIR, 'src/core/hooks'),
      hoc: path.resolve(BASE_DIR, 'src/core/hoc'),
      assets: path.resolve(BASE_DIR, 'src/assets'),
      pages: path.resolve(BASE_DIR, 'src/features/pages'),
      atoms: path.resolve(BASE_DIR, 'src/features/atoms'),
      molecules: path.resolve(BASE_DIR, 'src/features/molecules'),
      organisms: path.resolve(BASE_DIR, 'src/features/organisms'),
      templates: path.resolve(BASE_DIR, 'src/features/templates'),
      api: path.resolve(BASE_DIR, 'src/config/api'),
      routes: path.resolve(BASE_DIR, 'src/config/routes'),
      config: path.resolve(BASE_DIR, 'src/config'),
      utils: path.resolve(BASE_DIR, 'src/utils'),
      stores: path.resolve(BASE_DIR, 'src/stores')
    },
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg|png|jpg|jpeg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            }
          },
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ],
        exclude: /assets/
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@reset-import': false }
          }
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new SvgStore({
      svgoOptions: {
        plugins: [{ removeTitle: true }]
      }
    })
  ],
  performance: {
    hints: false
  }
}
