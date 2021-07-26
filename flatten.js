const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = true;
  for (let x = 0; x < arrayOne.length; x++) {
    if (arrayOne[x] !== arrayTwo[x]) {
      result = false;
    }
  }
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const flatten = function(array) {
  let flatArray = [];

  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x]) === true) {
      for (let y = 0; y < array[x].length; y++) {
        flatArray.push(array[x][y]);
      }
    } else {
      flatArray.push(array[x]);
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
