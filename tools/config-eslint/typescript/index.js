const typescriptEslintPlugin = require('typescript-eslint');
const typescriptParser = require('@typescript-eslint/parser');
const eslintPluginImportX = require('eslint-plugin-import-x');
const eslintPluginImportXResolverTypescript = require('eslint-import-resolver-typescript');

module.exports = typescriptEslintPlugin.config({
  extends: [
    ...typescriptEslintPlugin.configs.strict,
    ...typescriptEslintPlugin.configs.stylistic,
    eslintPluginImportX.flatConfigs.recommended,
    eslintPluginImportX.flatConfigs.typescript
  ],
  files: ['.ts', '.tsx'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname
    }
  },
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Boolean: {
            fixWith: 'boolean',
            message: 'Use `boolean` instead.'
          },
          Function: 'Use a specific function type instead, like `() => void`.',
          Number: {
            fixWith: 'number',
            message: 'Use `number` instead.'
          },
          Object: {
            fixWith: 'Record<string, unknown>',
            message:
              'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848'
          },
          Omit: 'Prefer the `Except` type in the `type-fest` package instead as it’s stricter.',
          String: {
            fixWith: 'string',
            message: 'Use `string` instead.'
          },
          Symbol: {
            fixWith: 'symbol',
            message: 'Use `symbol` instead.'
          },
          object: {
            fixWith: 'Record<string, unknown>',
            message:
              'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848'
          }
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
        trailingUnderscore: 'forbid'
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike'
      },
      {
        custom: {
          match: false,
          regex: '^I[A-Z]'
        },
        format: ['PascalCase'],
        selector: 'interface'
      }
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    'constructor-super': 'off', // ts(2335) & ts(2377)
    'getter-return': 'off', // ts(2378)
    'import/no-unresolved': 'off',
    'no-const-assign': 'off', // ts(2588)
    'no-dupe-args': 'off', // ts(2300)
    'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
    'no-dupe-keys': 'off', // ts(1117)
    'no-func-assign': 'off', // ts(2539)
    'no-import-assign': 'off', // ts(2539) & ts(2540)
    'no-new-symbol': 'off', // ts(7009)
    'no-obj-calls': 'off', // ts(2349)
    'no-redeclare': 'off', // ts(2451)
    'no-setter-return': 'off', // ts(2408)
    'no-this-before-super': 'off', // ts(2376)
    'no-undef': 'off', // ts(2304)
    'no-unreachable': 'off', // ts(7027)
    'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
    'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
    'prefer-const': 'error', // ts provides better types with const
    'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
    'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
    'valid-typeof': 'off' // ts(2367)
  },
  settings: {
    'import-x/resolver': {
      name: 'eslint-import-resolver-typescript',
      node: {
        extensions: ['.ts', '.tsx', '.mts']
      },
      resolver: eslintPluginImportXResolverTypescript,
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
});
