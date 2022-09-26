module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string'
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number'
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean'
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol'
          },
          Object: {
            message:
              'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>'
          },
          object: {
            message:
              'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>'
          },
          Function: 'Use a specific function type instead, like `() => void`.',
          Omit: 'Prefer the `Except` type in the `type-fest` package instead as it’s stricter.'
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      },
      typescript: {
        alwaysTryTypes: true
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
};
