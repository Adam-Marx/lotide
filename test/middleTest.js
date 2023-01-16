const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const testArray = [1, 2, 3, 4];
assertArraysEqual(middle(testArray), 2.5);
const testArray2 = [1, 2, 3];
assertArraysEqual(middle(testArray2), 2);