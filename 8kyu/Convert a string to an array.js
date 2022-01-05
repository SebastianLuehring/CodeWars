// Convert a string to an array



// Write a function to split a string and convert it into an array of words.
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]



// Solution:

function stringToArray(string){
    return string.trim().split(" ")
    }
    
    
    //Found this answer on the internet. It makes a bit of sense
    
    
    function stringToArray(string){
      return string.split(' ');
    }
    
    //This is the best way to answer the question. It is saying to take in the string, to add the split() method with a space in between shown by the (' '). And it is a simple return case. Very elegant. Learn from this
    
    
    
    