const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src/index.jsx",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: (env && env.NODE_ENV) || "development",
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
    devServer: {
      publicPath: "/dist/",
      contentBase: path.join(__dirname, "public"),
      port: 8800,
      hot: true,
    },
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        title: "Mini Bid",
        filename: path.resolve(__dirname, "public/index.html"),
        reactWrapperId: "app",
        template: path.resolve(__dirname, "src/pages/template/index.html"),
      }),
    ],
  };
};
