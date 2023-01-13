
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

//MAP FUNCTION

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, word => word[0]);
console.log(results1);

//ASSERTING 

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
console.log('-----------BREAK------------');

const dogs = ['Ralph', 'Mikey', 'Princess', 'Old Yeller'];
const results2 = map(dogs, dog => `${dog} is a good boy/girl.`);
console.log(results2);
console.log('-----------BREAK------------');

assertArraysEqual(results2, ['Ralph is a good boy/girl.', 'Mikey is a good boy/girl.', 'Princess is a good boy/girl.', 'Old Yeller is a good boy/girl.']);