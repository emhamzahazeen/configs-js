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
    'no-restricted-syntax': [
      'error',
      {
        selector: "ClassDeclaration[superClass.name!='Error']",
        message: 'Class declarations are not allowed except for extending errors.'
      }
    ],
    'node/no-unsupported-features/es-syntax': 'off',
    'linebreak-style': 0,
    'no-console': 1,
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js']
      }
    },
    'import/ignore': ['node_modules'],
    'import/no-unresolved': [2, { ignore: ['node-modules'] }]
  }
};
