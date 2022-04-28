// Exclamation marks series #1: Remove an exclamation mark from the end of string


// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.



// Solution:

function remove (string) {
    if(string.charAt(string.length - 1) === "!"){
      return string.slice(0, -1)
    }else{
      return string
    }
    return '';
  }
  
  
  const remove = s => s.replace(/!$/, '');
  
  
  function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }


  