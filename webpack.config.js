const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource'
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'src/images/[name].[ext]'

  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin(
    {
      template: path.resolve(__dirname, './src/index.html'),
    },

  )],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};