// Grasshopper - Summation



// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8



// Solution:


var summation = function (num) {
    function sumTo(num) {
    return num * (num + 1) / 2;
  }
  
  return( sumTo(num) );
  }
  
  
  
  var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }
  
  
  
  const summation = n => n * (n + 1) / 2;
  
  
  
  
  var summation = function f(num) {
    return num ? num + f(num-1) : 0;
  }
  
  