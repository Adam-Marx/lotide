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
  
const without = function(source, itemsToRemove) {
  let output = [];

  for(let index = 0; index < source.length; index++) {
    if(source[index] !== itemsToRemove[index]) {
      output.push(source[index])
    }
  }
  return output;
}

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["1", 2, "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);