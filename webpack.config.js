const path = require("path");
module.exports = {
  entry: "./app/fetch.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"), //kreirati će se nova mapa dist
    filename: "bundle.js",
  },

  mode: "production",
};
