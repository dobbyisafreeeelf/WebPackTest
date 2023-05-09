const path = require("path");
module.exports = {
  entry: "./app/fetch.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  mode: "production",
};
