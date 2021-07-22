const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(array) {
  let newArray = [];
  for (let x = 1; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const empty = [];
tail(words);
console.log(tail(empty));
let result = tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], "Lighthouse");