import * as array from './lib/array';
import * as comparison from './lib/comparison';
import * as date from './lib/date';
import * as math from './lib/math';
import * as number from './lib/number';
import * as object from './lib/object';
import * as string from './lib/string';
import * as url from './lib/url';

export const HandlebarsHelpers = Object.assign({}, array, comparison, date, math, number, object, string, url);
