module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-each-key-value-single-line': true,
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-function-named-arguments': [
      'always',
      {
        ignoreFunctions: ['map.map-merge', '/^math.*/']
      }
    ],
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': 'func-.+',
    'scss/at-if-no-null': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': 'mixin-.+',
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': true,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-after': [
      'always',
      {
        except: ['last-nested', 'before-dollar-variable'],
        ignore: ['before-comment']
      }
    ],
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-dollar-variable']
      }
    ],
    'scss/dollar-variable-first-in-block': [
      'true',
      {
        ignore: ['comments', 'imports']
      }
    ],
    'scss/dollar-variable-pattern': '^[a-z0-9\\-]+$',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/map-keys-quotes': 'always',
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
};
