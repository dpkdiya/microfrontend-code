const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3000 },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        header: "header@http://localhost:3001/remoteEntry.js",
        products: "products@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/store.js",
        "./utils": "./src/utils.js",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
