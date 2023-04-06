const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
      filename: 'main.js'
  },
  devServer: {
    static: './dist',
    stats: {
        children: false
       },
    hot: false   
  },
  module: {
      rules: [
        { test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            }
          }, 'css-loader'] },

        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {pretty: true}
        }
      ]
    },
  plugins: [new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin(
              {
                template: './src/base.pug',
              }
            ),
            new CssMinimizerPlugin(),
            new TerserPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
}