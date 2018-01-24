// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let len = str.length

  return str.split('').every( (char, i) => {
    return char === str.charAt(len - i - 1)
  })
}

palindrome("apple")

module.exports = palindrome;

// Solution 1: reverse the str by using Array.prototype.reverse
// Complexity:  O(n) // n is the length of the string
//
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('')

//   return str === reversed
// }

// Solution 2: check the mirror characters in the str by using Array.prototype.every
// Complexity:  O(n) // n is the length of the string
//
// Note: string.charAt(x) vs. string[x]
//      https://stackoverflow.com/questions/5943726/string-charatx-or-stringx
//
// function palindrome(str) {
//   return str.split('').every( (char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }
