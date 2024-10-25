const jest = require('eslint-plugin-jest');
const globals = require('globals');

const makeEslintJestConfigs = (files) => {
  return [
    {
      files,
      ...jest.configs['flat/recommended'],
      ...jest.configs['flat/style'],
      languageOptions: {
        globals: {
          ...globals.jest
        }
      },
      rules: {
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'test',
            withinDescribe: 'test'
          }
        ]
      }
    }
  ];
};

module.exports = makeEslintJestConfigs;
