// Hex to Decimal



// Complete the function which converts hex number (given as a string) to a decimal number.



// Solution:


function hexToDec(hexString){
    return parseInt(hexString,16);
  }
  
  
  
  function hexToDec(hexString){
    let hexVal = {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },  clone = hexString.split('').map(x => x.toLowerCase()), isNeg = false;
    if(clone[0] === '-') {
      isNeg = true;
      clone.splice(0,1);
    }
    let output = Number(clone
      .reverse()
      .map((e,i)=> hexVal[e] ? hexVal[e]*Math.pow(16, i) : e*Math.pow(16, i))
      .reduce((a,b) => a+b), 10);
    return isNeg ? output * -1 : output;
  }
  
  
  

  