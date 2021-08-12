// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjecysEqual = require('./assertObjectsEqual');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  flatten: flatten,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  map: map,
  takeUntil: takeUntil,
  findKey: findKey,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjecysEqual: assertObjecysEqual
};