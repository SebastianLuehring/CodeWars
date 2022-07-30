// Exclamation marks series #2: Remove all exclamation marks from the end of sentence





// Remove all exclamation marks from the end of sentence.
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"



// Solution:


function remove (string) {  
    while (string && string.slice(-1) == '!') {
    string = string.slice(0,-1);
    }
    return string;
  }
  
  
  
  const remove = s => s.replace(/!+$/, '');
  
  
  
  function remove(s){
    return s.replace(/!+$/, '');
  }
  
  
  function remove(s){
    //coding and coding....
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
  }

  
  