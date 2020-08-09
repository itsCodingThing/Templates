const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
};
