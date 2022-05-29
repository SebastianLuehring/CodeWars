// What is between?




// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]



// Solution:


function between(a, b) {
    var numbers = [];
    for (var i = a; i <= b; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  
  
  
  const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);
  
  function between(a, b) {
    var all = [];
    for(a;a<=b;a++){
      all.push(a);
    }
    return all;
  }

  