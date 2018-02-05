// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn){
  const cache = {};

  return function(...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function slowFib(n, result = [0, 1]) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

/**
 * Solution 1: Use array to calculate all results
 * Complexity: O(n)
 * Time:        0.697s
 */
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     let a = result[i-1];
//     let b = result[i-2];
//     result.push( a + b );
//   }

//   return result[result.length - 1];
// }

/**
 * Solution 2: recursive
 * Complexity: O(nlogn)
 */
// function fib(n) {
//   if ( n < 2 ) return n;
//
//   return fib(n-1) + fib(n-2);
// }

/**
 * Solution 3: Memoization
 *   Store the arguments of each function call along with the result.
 *   If the function is called again with the same arguments, return
 *   the precomputed result, rather than return the function again.
 *
 * Complexity: O(logn)
 */
