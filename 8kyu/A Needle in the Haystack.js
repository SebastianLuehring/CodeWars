// A Needle in the Haystack




// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"



// Solution:

function findNeedle(haystack) {
    let found = "needle"
    if(haystack.includes("needle")){
      return "found the needle at position " + haystack.indexOf(found)
    }
  }
  
  
  
  
  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }
  
  
  
  
  function findNeedle(haystack) {
    var i = 0;
    while (i < haystack.length) {
      if (haystack[i] == 'needle') {
        return 'found the needle at position ' + i;
      }
      i++;  
    }
  }

  
  