module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 4200
  }
};
