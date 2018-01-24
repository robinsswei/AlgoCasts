// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  if( array.length <= size ) return array

  const chunked = []
  let index = 0

  while( index < array.length ){
    chunked.push( array.slice(index, index + size ))
    index += size
  }

  return chunked
}

module.exports = chunk;

// Solution 1: iterate the array
// Complexity: O(n), n is the size of the array
//
// function chunk(array, size) {
//   if( array.length <= size ) return array

//   const chunked = []
//   for( let ele of array ){
//     const last = chunked[chunked.length - 1]

//     if( !last || last.length === size ){
//       chunked.push([ele])
//     }else{
//       last.push(ele)
//     }
//   }

//   return chunked
// }

// Solution 2: use Array.prototype.slice()
// Complexity: O(n/size) = O(n), n is the size of the array
//
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//
// Note: a shallow copy of the original array with slice(start, end)
//       but end is not included!
//
// function chunk(array, size) {
//   if( array.length <= size ) return array

//   const chunked = []
//   let index = 0

//   while( index < array.length ){
//     chunked.push( array.slice(index, index + size ))
//     index += size
//   }

//   return chunked
// }
