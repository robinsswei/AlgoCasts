// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if( n < 0 ){
    return 0 - reverseInt( Math.abs(n) )
  }else{
    return parseInt( n.toString().split('').reverse().join('') )
  }
}

module.exports = reverseInt;

// Solution 1: Use parseInt() to deal with "0010" and "123-"
// Time:        0.783s, estimated 1s
//
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('')

//   return parseInt(reversed) * Math.sign(n)
// }

// Solution 2: A little bit faster than solution 1
// Time:        0.7s, estimated 1s
//
// function reverseInt(n) {
//   if( n < 0 ){
//     return 0 - reverseInt( Math.abs(n) )
//   }else{
//     return parseInt( n.toString().split('').reverse().join('') )
//   }
// }
