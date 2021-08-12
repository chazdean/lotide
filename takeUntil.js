const takeUntil = function(array, callback) {
  let result = [];
  array.forEach((element, index) => {
    if (callback(element)) {
      result = array.slice(0, index);
      return;
    }
  });
  return result;
};

module.exports = takeUntil;
