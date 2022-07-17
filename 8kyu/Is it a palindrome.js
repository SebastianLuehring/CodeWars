// Is it a palindrome?




// Write a function that checks if a given string (case insensitive) is a palindrome.





// Solution:


function isPalindrome(x) {
    var re = /[\W_]/g;
  var lowRegStr = x.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}


const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}


const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();




