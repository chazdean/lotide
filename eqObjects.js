const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let result = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (object1[key].length !== object2[key].length) {
        return false;
      }
      result = eqArrays(object1[key], object2[key]);
    }
  }
  return result;
};

module.exports = eqObjects;



