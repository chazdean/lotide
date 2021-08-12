const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(words, word => word.length);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);
assertArraysEqual(results3, [ 6, 7, 2, 5, 3 ]);