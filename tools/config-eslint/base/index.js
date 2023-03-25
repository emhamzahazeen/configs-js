module.exports = {
  env: {
    node: true
  },
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
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
};
