// Find the Slope



// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope



// Solution:


function slope(points){
    let y = points[3] - points[1]
    let x = points[2] - points[0]
    let sum = y/x
    
    if(x === 0){
      return "undefined"
    }else{
      return sum.toString()
    }
  }
  
  
  function slope([ x1, y1, x2, y2 ]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
  }
  
  
  const slope = points => points[2] == points[0] ? "undefined" : (points[3] - points[1]) / (points[2] - points[0]) + "";
  
  
  let slope = ([a, b, c, d]) => a == c ? "undefined" : "" + ((b - d) / (a - c));
  

  

  