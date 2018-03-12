const R = require('ramda');
const config = require('./webpack.common.config');

const { common, resolve, rules, plugins, RULES } = config;

module.exports = R.compose(
  resolve,
  rules([RULES.babel, RULES.css, RULES.assets]),
  plugins,
  common
)({ mode: 'production' });
