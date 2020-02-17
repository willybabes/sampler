"use strict"

const path = require("path")

module.exports = {
  // Set debugging source maps to be "inline" for simplicity and ease of use
  devtool: "inline-source-map",

  // App entry point
  entry: "./src/index.tsx",

  // Where to compile the bundle
  // Default is dist
  output: {
    filename: "bundle.js"
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
    extensions: [".ts", ".tsx", ".js"]
  }
}