import path from "path";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // Set to 'production' for production builds
  entry: "./src/js/index.js", // Entry point for your JS
  output: {
    filename: "index.js", // Output JS file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css", // Output CSS file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/, // Process SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into a file
          "css-loader", // Handle @import and url() in CSS
          "postcss-loader", // Process CSS with PostCSS
          "sass-loader", // Compile Sass to CSS
        ],
      },
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile modern JS to older versions
        },
      },
    ],
  },
};
