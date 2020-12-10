/* https://stylelint.io/user-guide/rules/list */

module.exports = {
  defaultSeverity: "error",
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-idiomatic-order"
  ],
  rules: {
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "comment-no-empty": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "indentation": 2,
    "max-empty-lines": 1,
    "media-query-list-comma-newline-after": "always",
    "no-empty-first-line": true,
    "no-empty-source": null,
    "selector-list-comma-newline-after": "always",
    "string-quotes": "double",
    "shorthand-property-no-redundant-values": true
  }
};
