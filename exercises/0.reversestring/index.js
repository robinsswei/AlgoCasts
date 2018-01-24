// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = str.split('')
  let reversed = ''

  for( let character of arr ){
    reversed = character + reversed
    debugger
  }

  return reversed
}

reverse("apple")

module.exports = reverse;

// Solution 1: use Array.prototype.reverse
//
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("")
// }

// Solution 2: use for..loop
//
// function reverse(str) {
//   const arr = str.split('')
//   let reversed = ''

//   for( let character of arr ){
//     reversed = character + reversed
//   }

//   return reversed
// }

// Solution 3: use Array.prototype.reduce
//
// function reverse(str) {
//   return str.split('').reduce( (rev, char) => rev = char + rev, '')
// }
