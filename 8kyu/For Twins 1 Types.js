// For Twins: 1. Types




// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!
// Task:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
// Examples:
// 42, "number"   --> true
// "42", "number" --> false




// Solution:


function typeValidation(variable, type) {
    if((typeof variable) === type ){
       return true
       }else {
      return false
    }
  }
  
  
  
  function typeValidation(variable, type) {
    return typeof variable === type; 
  }

  