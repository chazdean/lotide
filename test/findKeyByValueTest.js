const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {

  it('returns The Wire for drama', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "drama"), "The Wire");
  });

  it("returns undefined for The 70s Show", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});
