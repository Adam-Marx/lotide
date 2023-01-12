const eqArrays = function(array1, array2) {

  if(array1.length !== array2.length) return false;

  for(let index = 0; index < array1.length; index++) {
        if(array1[index] !== array2[index]){
          return false;
        } 
    }
    return true;
  }

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }

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






const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)
