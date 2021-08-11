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

module.exports = middle;
