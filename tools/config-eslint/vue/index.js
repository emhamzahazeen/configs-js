module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-strongly-recommended', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: ['.vue'],
    parser: {
      js: 'esprima',
      jsx: 'esprima',

      ts: require.resolve('@typescript-eslint/parser'),
      tsx: require.resolve('@typescript-eslint/parser')
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'object-shorthand': ['error', 'always'],
    'prefer-template': ['error'],
    'sort-imports': ['error', { allowSeparatedGroups: true }],
    'sort-vars': ['error'],
    'vue/array-bracket-newline': ['error', 'consistent'],
    'vue/block-lang': ['error', { script: { lang: 'ts' }, style: { lang: 'less' } }],
    'vue/camelcase': ['error'],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { ignores: [], registeredComponentsOnly: false }],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/eqeqeq': ['error'],
    'vue/multi-word-component-names': 'off',
    'vue/next-tick-style': ['error'],
    'vue/no-bare-strings-in-template': [
      'error',
      {
        allowlist: [
          '(',
          ')',
          ',',
          '.',
          '&',
          '+',
          '-',
          '=',
          '*',
          '/',
          '#',
          '%',
          '!',
          '?',
          ':',
          '[',
          ']',
          '{',
          '}',
          '<',
          '>',
          '\u00b7',
          '\u2022',
          '\u2010',
          '\u2013',
          '\u2014',
          '\u2212',
          '|'
        ]
      }
    ],
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/no-irregular-whitespace': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-potential-component-option-typo': ['error', { presets: ['all'] }],
    'vue/no-static-inline-styles': ['error'],
    'vue/no-template-target-blank': ['error'],
    'vue/no-this-in-before-route-enter': ['error'],
    'vue/no-undef-properties': ['error'],
    'vue/no-useless-concat': ['error'],
    'vue/no-useless-mustaches': ['error'],
    'vue/no-useless-v-bind': ['error'],
    'vue/no-v-text': ['error'],
    'vue/object-shorthand': ['error', 'always'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/prefer-prop-type-boolean-first': ['error'],
    'vue/prefer-separate-static-class': ['error'],
    'vue/prefer-template': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/require-direct-export': ['error'],
    'vue/require-expose': ['error'],
    'vue/sort-keys': ['error'],
    'vue/static-class-names-order': ['error'],
    'vue/v-for-delimiter-style': ['error'],
    'vue/v-on-function-call': ['error']
  }
};
