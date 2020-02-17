"use strict"
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const path = require("path")

module.exports = {
  // Set debugging source maps to be "inline" for simplicity and ease of use
  devtool: "inline-source-map",

  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, 'build')
  },

  // App entry point
  entry: "./src/index.tsx",

  // Where to compile the bundle
  // Default is dist
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'build'),
    chunkFilename: '[name].js'
  },

  // File loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },

  // File extensions to support resolving
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ],
}