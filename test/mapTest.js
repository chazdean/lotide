const map = require('../map');
const assert = require('chai').assert;

const words = ['ground', 'control', 'to', 'major', 'tom'];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(words, word => word.length);

describe("#map", () => {

  it("returns [ 'g', 'c', 't', 'm', 't' ] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[0]", () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ] for map(['ground', 'control', 'to', 'major', 'tom'], word => word.toUpperCase())", () => {
    assert.deepEqual(results2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);
  });

  it("returns [ 6, 7, 2, 5, 3 ] for map(['ground', 'control', 'to', 'major', 'tom'], word => word.length)", () => {
    assert.deepEqual(results3, [ 6, 7, 2, 5, 3 ]);
  });
  
});
