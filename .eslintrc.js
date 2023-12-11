module.exports = {
  root: true,
  ignorePatterns: ['node_modules/', 'lib/', 'scripts/', 'example/', '*.*.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react-native/no-inline-styles': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
