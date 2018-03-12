const R = require('ramda');
const config = require('./webpack.common.config');

const { common, development, resolve, rules, plugins, RULES } = config;

module.exports = R.compose(
  development,
  resolve,
  rules([RULES.babel, RULES.css, RULES.assets]),
  plugins,
  common
)({ mode: 'development' });
