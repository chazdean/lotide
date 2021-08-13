const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  //TESTING PRIMITIVE DATA
  it("returns true for ab = ba", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns false for ab = abc", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  //TESTING NON-PRIMITIVE DATA
  it("returns true for cd = dc", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("returns false for cd = cd2", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  
});

