
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
  

const letterPositions = function(sentence) {
  const results = {};
  
  
  for (let i = 0; i < sentence.length; i++) {
    console.log('value of i:', sentence[i])
    console.log('index', i)
    if (sentence[i] !== " ") {
      if(results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i];
      }
    }

  }

  return results;
};


const smallString = 'hello';

const results1 = letterPositions('hello');

assertArraysEqual(results1['h'], [0]);
assertArraysEqual(results1['e'], [1]);
assertArraysEqual(results1['l'], [2, 3]);
assertArraysEqual(results1['o'], [4]);
