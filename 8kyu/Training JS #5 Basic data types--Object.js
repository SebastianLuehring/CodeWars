// Training JS #5: Basic data types--Object

// Task
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."



// Solution:


function animal(obj){
    let rawr = {name:"dog",
                legs:4,
                color:"white"}
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
  
  
  function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }

  