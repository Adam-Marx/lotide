

 const eqArrays = function(array1, array2) {

  if(array1.length !== array2.length) return false;

  for(let index = 0; index < array1.length; index++) {
    if(array1[index] !== array2[index]){
      return false;
    } 
  }
  return true;
}


const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
    } else {
      console.log(`❌❌❌ Assertion Failed: [${array1}] !== [${array2}]`);
    }
  };

//takeUntil HIGHER ORDER FUNCTION

const takeUntil = function(array, callback) {
  const results = [];

    for(let item of array) {
      if(!callback(item)) {
        results.push(item);
     } else if (callback(item)) {
        break;
      }
    
    }
    return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);