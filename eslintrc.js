module.exports = {
  extends: [
    'prettier',
    'prettier/react',
    'stylelint',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/state-in-constructor': 0,
    'no-shadow': [2, { allow: ['name'] }],
    'prefer-named-capture-group': 0,
    'require-unicode-regexp': 0,
  },
}
