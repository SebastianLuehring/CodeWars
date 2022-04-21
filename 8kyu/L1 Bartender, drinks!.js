// L1: Bartender, drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".



// Solution:


function getDrinkByProfession(param){
    if(param.toLowerCase() === "Jabroni".toLowerCase()){
      return     "Patron Tequila"
    }else if(param.toLowerCase() ===     "School Counselor".toLowerCase() ){
      return     "Anything with Alcohol"
    }else if(param.toLowerCase() === "Programmer".toLowerCase()){
      return     "Hipster Craft Beer"
    }else if(param.toLowerCase() === "Bike Gang Member".toLowerCase()){
      return "Moonshine"
    }else if(param.toLowerCase() === "Politician".toLowerCase()){
      return "Your tax dollars"
    }else if(param.toLowerCase() === "Rapper".toLowerCase()){
      return "Cristal"
    }else {
      return "Beer"
  }
  }
  
  
  
  function getDrinkByProfession(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return "Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
  }

  