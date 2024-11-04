import path from "path";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(path.dirname(new URL(import.meta.url).pathname), 'dist'),
  },
  devServer: {
    static: path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      'dist'
    ),
    port: 8080,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
