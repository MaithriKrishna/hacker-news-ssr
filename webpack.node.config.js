const path = require('path');
const context = process.cwd();
var nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  return {
    context,
    mode: env.NODE_ENV || "production",
    entry: path.resolve(__dirname, 'app.js'),
    output: {
      path: path.resolve(__dirname, 'dist', 'node'),
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
      __dirname: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader'
          ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
        chunkFilename: '[id].css',
      }),
    ]
  }
}
