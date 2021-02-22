module.exports = {
  entry: "./src/App/App.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
