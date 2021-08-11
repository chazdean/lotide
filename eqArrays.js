const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
  for (let x = 0; x < arrayOne.length; x++) {
    if (arrayOne[x] !== arrayTwo[x]) {
      result = false;
    }
  }
  return result;
};

module.exports = eqArrays;

