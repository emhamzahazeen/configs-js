module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
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
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.mts']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
