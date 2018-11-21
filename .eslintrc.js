module.exports = {
  env: {
      es6: true,
      browser: true,
      node: true,
      jest: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
      'prettier/prettier': [
          'error', { trailingComma: 'es5', singleQuote: true }
      ],
      'react/jsx-filename-extension': [ 'error', { extensions: ['.js'] }
      ]
  }
};
