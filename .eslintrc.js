module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    NodeJS: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
  },
};
