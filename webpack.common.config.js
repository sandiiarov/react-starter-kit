const R = require('ramda');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LENS = {
  devTool: R.lensPath(['devtool']),
  devServer: R.lensPath(['devServer']),
  resolveModules: R.lensPath(['resolve', 'modules']),
  rules: R.lensPath(['module', 'rules']),
  plugins: R.lensPath(['plugins']),
};

const RULES = {
  babel: {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  },
  assets: {
    test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
    use: 'url-loader?limit=8000',
  },
};

const common = R.compose(
  R.set(LENS.resolveModules, ['node_modules']),
  R.set(LENS.rules, []),
  R.set(LENS.plugins, [])
);

const development = R.compose(
  R.set(LENS.devTool, 'eval'),
  R.over(
    LENS.devServer,
    R.merge({
      contentBase: 'src',
      stats: 'errors-only',
      historyApiFallback: true,
    })
  )
);

const resolve = R.over(LENS.resolveModules, R.concat(['src']));

const rules = list => R.over(LENS.rules, R.concat(list));

const plugins = R.over(
  LENS.plugins,
  R.concat([
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.NamedModulesPlugin(),
  ])
);

module.exports = {
  common,
  RULES,
  development,
  resolve,
  rules,
  plugins,
};
