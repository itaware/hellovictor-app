const ngtools = require('@ngtools/webpack');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/main-aot.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'build.js'
  },
  plugins: [
    new ExtractTextPlugin({
      "filename": "[name].bundle.css",
      "disable": true
    }),
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig-aot.json'
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  module: {
    rules: [
      {
        "test": /\.scss$|\.sass$/,
        "loaders": ExtractTextPlugin.extract({
          "use": [
            "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
            "postcss-loader",
            "sass-loader"
          ],
          "fallback": "style-loader",
          "publicPath": ""
        })
      },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  }
}