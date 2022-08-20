const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const main = path.resolve(__dirname, "./src/main.js");
const dist = path.resolve(__dirname, "./dist");

module.exports = {
  mode: "development",
  entry: [main],
  output: {
    filename: "[name].js",
    path: dist,
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.png$|.jpg$|.jpeg$|.gif$/,
        use: [
          {
            loader: "url-loader",
            options: {
              publicPath: dist,
              name: "[name].[ext]?[hash]",
              limit: 5000,
            },
          },
          {
            loader: "file-loader",
            options: {
              publicPath: dist,
              name: "[name].[ext]?[hash]",
            },
          },
        ],
      },
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        // typescript 사용시엔 ts-loader를 넣어주어야한다.
        test: /\.tsx?$|\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "./src/main.html",
    }),
  ],
};
