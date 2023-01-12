const eqArrays = function(array1, array2) {

  if(array1.length !== array2.length) return false;

  for(let index = 0; index < array1.length; index++) {
        if(array1[index] !== array2[index]){
          return false;
        } 
    }
    return true;
  };


const eqObjects = function(object1, object2) {

 const object1KeyArray = Object.keys(object1);
 const object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {

    for (let keys of object1KeyArray) {
      const object1Keys = object1[keys]
      const object2Keys = object2[keys];

      if(Array.isArray(object1Keys) && Array.isArray(object2Keys)) {
        if(!eqArrays(object1Keys, object2Keys)) {
          return false;
        } 
        
      } else {
          if (object1Keys !== object2Keys) {
            return false;
        }
      }
    }
  return true;
  } 

 };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect

  if(eqObjects(actual, expected)) {
    console.log(`✅👌✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`❌😔❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
}; 

//TEST CODE BELOW

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

assertObjectsEqual(longSleeveMultiColorShirtObject, firstNames);