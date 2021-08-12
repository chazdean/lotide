const findKeyByValue = function(object, value) {
  for (const genre of Object.keys(object)) {
    if (genre === value) {
      return object[genre];
    }
  }
  return;
};

module.exports = findKeyByValue;
