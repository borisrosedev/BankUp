const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  watch: true,
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm-browser.js", // Résoudre le runtime de Vue.js correctement
    },
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // Utiliser vue-loader pour les fichiers .vue
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Utiliser le preset Env pour JS
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Utiliser le preset React
          },
        },
      },
      {
        test: /\.json$/, // Expression régulière pour les fichiers JSON
        type: "json", // Type de module pour JSON
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets",
        },
        {
          from: "data",
          to: "data",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
