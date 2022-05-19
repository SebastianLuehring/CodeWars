// Sum Mixed Array





// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.



// Solution:


function sumMix(x){
    let newX = x.map(Number)
    return (newX.reduce((a,b) => a + b,0))
  }
  
  
  function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }
  
  
  
  function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }
  
  
  
  function sumMix(x){
   return x.reduce((s,x)=>s+ +x,0);
  }

  
  