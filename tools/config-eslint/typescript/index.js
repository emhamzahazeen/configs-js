const typescriptEslintPlugin = require('typescript-eslint');
const typescriptParser = require('@typescript-eslint/parser');
const eslintPluginImportX = require('eslint-plugin-import-x');
const eslintPluginImportXResolverTypescript = require('eslint-import-resolver-typescript');
const commonExclusionsRules = require('./common-exclusions-rules');

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
  rules: commonExclusionsRules,
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
