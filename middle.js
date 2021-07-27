const { exist } = require("joi");

// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  let newArray = [];
  let middleOfArray = array.length / 2;
  if (array.length < 3) {
    return newArray;
  } else if (array.length % 2 === 0) {
    newArray.push(middleOfArray);
    newArray.push(middleOfArray + 1);
  } else {
    newArray.push(Math.ceil(middleOfArray));
  }
  return newArray;
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

