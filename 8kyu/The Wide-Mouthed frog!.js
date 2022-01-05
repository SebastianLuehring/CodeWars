// The Wide-Mouthed frog!





// The wide-mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
// When he meets the alligator, it then makes a tiny mouth.
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide




// Solution:

function mouthSize(animal) {
    if(animal === "alligator"|| animal === "ALLIGATOR"){
      return "small"
    }else{
      return "wide"
    }
  }
  
  
  function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
  }
  
  //this is the proper way to do it ^^^
  
  
  //This code is simply seeing if the animal being confronted is an alligator or not. That's as simple as it needs to be. This code is saying IF the animal IS an alligator, return "small" (referring to the wide mouthed frog. Because the alligator likes to eat wide mouthed frogs in particular. Else, if the animal is not an alligator, return the word "wide". Very simple!
  
  


  