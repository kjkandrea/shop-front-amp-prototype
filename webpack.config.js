const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve('./webpack-loader.js')
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new HtmlWebPackPlugin({
      filename: 'amp.html',
      template: './src/amp/index.html',
    })
  ]
}