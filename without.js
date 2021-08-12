const without = function(source, itemsToRemove) {
  let add = undefined;
  let cleanArray = [];
  
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] !== itemsToRemove[y]) {
        add = true;
      } else {
        add = false;
      }
    }
    if (add === true) {
      cleanArray.push(source[x]);
    }
  }
  return cleanArray;
};

module.exports = without;
