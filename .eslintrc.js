module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': ['warn'],
    'import/no-named-as-default': ['off'],
    'import/prefer-default-export': ['off'],
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['then'],
      },
    ],
    'no-plusplus': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.test.tsx'],
      },
    },
  },
};
