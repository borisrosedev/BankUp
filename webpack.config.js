const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  watch: true,
  resolve: {
    extensions: ['.js', '.json'], // Extensions à résoudre
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json$/, // Expression régulière pour les fichiers JSON
        type: 'json', // Type de module pour JSON
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "assets", to: "assets", from: "data", to : "data" }],
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
