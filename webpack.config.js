const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: { react: require.resolve('react') },
  },
  devServer: {
    contentBase: 'src',
    stats: 'errors-only',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
};
