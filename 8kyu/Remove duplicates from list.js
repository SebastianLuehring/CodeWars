// Remove duplicates from list




// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.


// Solution:


function distinct(a) {
    var uniqueArray = [];
          
          // Loop through array values
          for(i=0; i < a.length; i++){
              if(uniqueArray.indexOf(a[i]) === -1) {
                  uniqueArray.push(a[i]);
              }
          }
          return uniqueArray;
      }
  
  
  function distinct(a) {
    return [...new Set(a)];
  }
  
  
  function distinct(a) {
    return Array.from(new Set(a));
  }
  
  
  function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
  }
  

  
  