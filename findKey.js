const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

const findKey = function(object, callback) {
  console.log(object);
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const planets = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(planets, x => x.stars === 2); // => "noma"

assertEqual(result1, 'noma');