// Are arrow functions odd?




// Time to test your basic knowledge in functions! Return the odds from a list:
// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []



// Solution:

function odds(values){
    let notEven = values.filter(n => n%2)
    return notEven
  }
  
  
  function odds(values){
    return values.filter( v => v%2 );
  }
  
  var odds = (values) => values.filter(v => v%2);
  
  

  
  