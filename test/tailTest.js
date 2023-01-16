const assert = require('chai').assert
const tail = require('../tail');
const words = ["Hello", "Lighthouse", "Labs"];

describe("tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words).length, 2);
  });
  it("returns 3 for words.length", () => {
    tail(words);
    assert.deepEqual(words.length, 3);
  });
});