const isDev = process.env.NODE_ENV === 'development';

const browsers = isDev ? ['last 1 Chrome version'] : ['defaults'];

const envOptions = {
  modules: false,
  loose: true,
  useBuiltIns: 'usage',
  targets: { browsers },
};

const presets = [
  [require.resolve('@babel/preset-env'), envOptions],
  require.resolve('@babel/preset-flow'),
  [require.resolve('@babel/preset-react'), { development: isDev }],
];

const plugins = [
  !isDev && require.resolve('@babel/plugin-transform-react-constant-elements'),
  !isDev && require.resolve('@babel/plugin-transform-react-inline-elements'),
  require.resolve('react-hot-loader/babel'),
].filter(Boolean);

module.exports = {
  presets,
  plugins,
};
