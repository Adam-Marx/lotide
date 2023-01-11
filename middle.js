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
  
  //check if more than 2 elements
  //arrays with odd number of elements: single middle element returned
  //arrays with even numer of elements: two middle elements returned

const middle = function(array) {
  if (array.length > 2) {
      if (array.length % 2 === 0) {
        
        let evenFirstElement = array[Math.floor((array.length -1) / 2)];
        let evenSecondElement = array[Math.floor(array.length / 2)];
     
        const evenMiddleElements = [evenFirstElement, evenSecondElement]; 

        return evenMiddleElements;

      } else if (array.length % 2 === 1) {
        let middleOddElement = [array[Math.floor(array.length / 2)]];
        return middleOddElement;
      }
  }
   
};

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));


const testArray = [1, 2, 3, 4];
middle(testArray);
assertArraysEqual(testArray, [1, 2, 3, 4]);