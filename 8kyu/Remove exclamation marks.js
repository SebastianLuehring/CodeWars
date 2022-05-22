// Remove exclamation marks



// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.




// Solution:


function removeExclamationMarks(s) {
    return s.replace(/[^a-zA-Z ]/g, "");
  }
  
  
  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

  