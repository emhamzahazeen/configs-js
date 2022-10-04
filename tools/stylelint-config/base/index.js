module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-length': 'long',
    'selector-class-pattern': '__[a-z]+',
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: ['else', 'return'],
        ignore: ['after-comment'],
        except: ['after-same-name', 'inside-block']
      }
    ],
    'at-rule-name-space-after': 'always',
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-newline-after': 'always',
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules']
  }
};
