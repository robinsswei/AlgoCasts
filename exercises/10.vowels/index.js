// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0 ;
}

module.exports = vowels;

/**
 * Solution 1: iterator
 * Complexity: O(n), n is the length of str
 *
 */
// function vowels(str) {
//   const VOWEL = "aeiou";
//   let counter = 0;

//   for (let char of str.toLowerCase() ){
//     if( VOWEL.includes(char) ) {
//       counter++;
//     }
//   }

//   return counter;
// }

/**
 * Solution 2: Regex Expression
 */
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0 ;
// }
