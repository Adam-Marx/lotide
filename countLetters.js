const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }

};
/*The function should take in a sentence (as a string) 
and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') 
should return results indicating that L appears twice, and H once.

Before implementing this function, 
we need to think about how it will report back these counts. 
It's not that we want to know how many H's are in this sentence?, 
because that would just be a number. We need it report back multiple numbers.

*/

const countLetters = function(sentence) {
  const results = {};

  for(let letter of sentence) {
    letter = letter.toLowerCase();

    if(results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
 


const result1 = countLetters('LHL');
const result2 = countLetters('Old McDonald had a Farm');

assertEqual(result1['l'], 2);
assertEqual(result2['d'], 4);
