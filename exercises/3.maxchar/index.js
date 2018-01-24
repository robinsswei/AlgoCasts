// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let arr = str.split('')
  let charMap = {}
  let max = 0
  let maxChar = ''

  // build the map for chars
  for ( let char of arr ){
    charMap[char] = charMap[char] + 1 || 1
  }

  // find the max count in the charMap
  for ( let char in charMap ){
    if( charMap[char] > max ){
      maxChar = char
      max = charMap[char]
    }
  }

  return maxChar
}

module.exports = maxChar;
