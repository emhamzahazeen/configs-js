module.exports = {
  env: {
    jest: true,
    'jest/globals': true
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  plugins: ['jest'],
  rules: {
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'test',
        withinDescribe: 'test'
      }
    ]
  }
};
