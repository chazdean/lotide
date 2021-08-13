const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {

  it('returns The Wire for drama', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "drama"), "The Wire");
  });

  it("returns undefined for The 70s Show", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});
