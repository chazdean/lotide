const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], "Lighthouse");
