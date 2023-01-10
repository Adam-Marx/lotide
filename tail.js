const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

const words = ["Hello", "Lighthouse", "Labs"];

const tail = function(array) {
  let tailArray = [];

  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};


const result = tail(words);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");


assertEqual(words.length, 3);