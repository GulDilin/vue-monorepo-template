module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports'), 'prettier-plugin-jsdoc'],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  singleAttributePerLine: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  printWidth: 100,
  importOrder: ['^@/components/(.*)$', '^@/composables/(.*)$', '^@/(.*)$'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  endOfLine: 'lf',

  jsdocVerticalAlignment: false,
  jsdocKeepUnParseAbleExampleIndent: false,
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: true,
  tsdoc: true,
  jsdocPrintWidth: 100,
}
