const path = require("path");

module.exports = (env) => {
  return {
    entry: "./src/index.js",
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
      extensions: [".js", ".jsx", ".json"]
    },
    devServer: {
      publicPath: "/dist/",
      contentBase: path.join(__dirname, "public"),
      port: 8800,
      hot: true
    }
  };
};
