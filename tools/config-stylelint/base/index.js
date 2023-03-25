module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['after-same-name', 'inside-block'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else', 'return']
      }
    ],
    'at-rule-name-space-after': 'always',
    'block-closing-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'color-hex-length': 'long',
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
    'selector-class-pattern': '__[a-z]+'
  }
};
