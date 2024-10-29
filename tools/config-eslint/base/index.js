const eslintConfigStandard = require('neostandard');
const eslintPluginEslintComments = require('@eslint-community/eslint-plugin-eslint-comments/configs');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginNoSecrets = require('eslint-plugin-no-secrets');
const eslintPluginRegex = require('eslint-plugin-regexp');
const eslintPluginPrettierWitheAutoEslintConfigPrettier = require('eslint-plugin-prettier/recommended');
const eslintPluginPromise = require('eslint-plugin-promise');
const globals = require('globals');

module.exports = [
  ...eslintConfigStandard(),
  eslintPluginImport.flatConfigs.errors,
  eslintPluginImport.flatConfigs.warnings,
  eslintPluginEslintComments.recommended,
  {
    plugins: {
      'no-secrets': eslintPluginNoSecrets
    },
    rules: {
      'no-secrets/no-secrets': 'error'
    }
  },
  eslintPluginRegex.configs['flat/recommended'],
  eslintPluginPromise.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
      '@stylistic/space-before-function-paren': ['error', 'never'],
      'linebreak-style': 0,
      'no-console': 1,
      'no-restricted-syntax': [
        'error',
        {
          message: 'Class declarations are not allowed except for extending errors.',
          selector: "ClassDeclaration[superClass.name!='Error']"
        }
      ],
      'node/no-unsupported-features/es-syntax': 'off',
      'prettier/prettier': 'error',
      semi: ['error', 'always'],
      'sort-keys': ['error', 'asc']
    },
    settings: {
      'import/ignore': ['node_modules'],
      'import/no-unresolved': [2, { ignore: ['node-modules'] }],
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs']
        }
      }
    }
  },
  eslintPluginPrettierWitheAutoEslintConfigPrettier
];
