const typescriptLoader = require('../loaders/typescript-loader');

module.exports = () => ({
  module: {
    rules: [typescriptLoader()]
  },
  resolve: {
    extensionAlias: {
      '.cts': ['.cjs', '.cts'],
      '.mts': ['.mjs', '.mts'],
      '.ts': ['.js', '.ts']
    },
    extensions: ['.ts', '.tsx', '.js']
  }
});
