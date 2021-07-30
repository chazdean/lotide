const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
  for (let x = 0; x < arrayOne.length; x++) {
    if (arrayOne[x] !== arrayTwo[x]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] !== " ") {
      if (results[sentence[x]]) {
        results[sentence[x]].push(sentence.indexOf(sentence[x], x));
      } else {
        results[sentence[x]] = [sentence.indexOf(sentence[x])];
      }
    }
  }

  return results;
  
};

console.log(letterPositions("lighthouse in the house"));

const sentence = "lighthouse in the house";

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);