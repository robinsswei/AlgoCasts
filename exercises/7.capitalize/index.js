// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase()

  for( let i = 1; i < str.length; i++ ){
    if( str[i-1] === ' ' ){
      result += str[i].toUpperCase()
    }else{
      result += str[i]
    }
  }

  return result
}

module.exports = capitalize;

// Solution 1: Split the string into words by space
// Complexity: O(n/C), n is the length of the string
//
// function capitalize(str) {
//   let words = []

//   for( let word of str.split(' ') ){
//     words.push(word[0].toUpperCase() + word.slice(1) )
//   }

//   return words.join(' ')
// }

// Solution 2: iterate through the string, compare whether neighbor is space on the left side
// Complexity: O(n), n is the length of the string
//
// function capitalize(str) {
//   let result = str[0].toUpperCase()

//   for( let i = 1; i < str.length; i++ ){
//     if( str[i-1] === ' ' ){
//       result += str[i].toUpperCase()
//     }else{
//       result += str[i]
//     }
//   }

//   return result
// }
