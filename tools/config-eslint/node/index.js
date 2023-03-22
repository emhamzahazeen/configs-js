module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off'
  }
};
