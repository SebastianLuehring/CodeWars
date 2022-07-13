// Find the position!





// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"



// Solution:



function position(letter){
    return "Position of alphabet: " + [...letter].map(a => parseInt(a, 36) - 9).filter(a => a >= 0);
    }
    
    
    
    function position(letter){
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
    }
    
    
    function position(letter) {
      return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
    }
    