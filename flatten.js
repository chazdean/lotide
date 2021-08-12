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

module.exports = flatten;
