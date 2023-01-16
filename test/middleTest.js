const middle = require('../middle');
const assert = require('chai').assert
describe('#middle', () => {
  it('returns 2.5 for [1, 2, 3, 4]', () => {
    const testArray = [1, 2, 3, 4];
    assert.deepEqual(middle(testArray), 2.5);
  });
  it('returns 2 for [1, 2, 3]', () => {
    const testArray = [1, 2, 3];
    assert.deepEqual(middle(testArray), 2);
  });
});