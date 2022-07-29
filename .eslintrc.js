module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'consistent-return': [0],
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx', '.tsx'] }],
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/semi': 'off',
    'no-shadow': ['off', {}],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    indent: ['error', 2],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-props-no-spreading': [0],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
