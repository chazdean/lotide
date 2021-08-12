const letterPositions = function(sentence) {
  const results = {};

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] !== " ") {
      if (results[sentence[x]]) {
        results[sentence[x]].push(sentence.indexOf(sentence[x], x));
      } else {
        results[sentence[x]] = [sentence.indexOf(sentence[x])];
      }
    }
  }

  return results;
  
};

module.exports = letterPositions;
