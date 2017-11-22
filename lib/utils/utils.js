module.exports = {
  // Array utils
  sortBy: require('array-sort'),
  flatten: require('arr-flatten'),

  // Html utils
  block: require('to-gfm-code-block'),
  tag: require('html-tag'),

  // JavaScript language utils
  typeOf: require('kind-of'),

  // matching utils
  'is-glob': require('is-glob'),
  mm: require('micromatch'),
  falsey: require('falsey'),

  // Number utils
  'is-even': require('is-even'),
  'is-number': require('is-number'),

  // Object utils
  'create-frame': require('./create-frame'),
  'get-object': require('get-object'),
  'get': require('get-value'),
  'for-own': require('for-own'),

  // Path utils
  'relative': require('relative')
};
