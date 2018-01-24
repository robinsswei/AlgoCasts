// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {

  // helper function to console.log()
  function log(n){
    if( n % 15 === 0 ){
      console.log('fizzbuzz')
    }else if( n % 3 === 0 ){
      console.log('fizz')
    }else if( n % 5 === 0 ){
      console.log('buzz')
    }else{
      console.log(n)
    }
  }

  for( let i = 1; i <= n; i++ ){
    log(i)
  }
}

module.exports = fizzBuzz;
