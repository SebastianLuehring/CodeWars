
// Hello, Name or World!




// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"



// Solution:


function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
      return `Hello, World!`;
    } else {
      return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
  }
  
  
  const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
  
  
  
  function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
  }

  
  