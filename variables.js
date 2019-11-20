/* 
Const can be used when the value assigned cannot be reaassigned. This is useful 
when writing codes and perhaps don't want a value assigned to a variable changing 
it value. However for object and arrays, content can be pushed on top of the original
content. This will work considering that the original values are not changed.

Let is used when variable assigned may be reassigned. It is also used in cases
where the variable will be used in a defined block of code. In other words, let 
are blocked scoped; a variable declared in a block with the let is only available 
for use within that block.

when a variable is declared with a var, it may or may not be reassigned, and the 
variable may or may not be used for a the entire function.

Hoisting is a JavaScript mechanism where variables and function declarations are 
moved to the top of their scope before code execution. var variables are hoisted 
to the top of its scope and initialized with a value of undefined. In addition,
let declarations are also hoisted to the top, however, the let keyword is not 
initialized. They are all hoisted to the top of their scope but while var variables 
are initialized with undefined, let and const variables are not initialized.
const must be initialized during declaration.

*/

// Example of Var code;

    var speak = "hey hi";
    var number = 4;

 function saySomething (){
    if (number > 3) {
        var speak = "say Hello"; 
    }

    console.log(speak); // console will display "say Hello" instead.
    
  }

saySomething()


//let example
 let speak = "hey hi";
 let number = 4;

 function saySomething (){
    if (number > 3) {
        let speak = "say Hello instead"; 
    }

    console.log(speak); // will display "hey hi" because using let speak is out of scope
    
  }

saySomething()

// const example

const speak  = "say Hi";
      speak = "say Hello instead";//error : Assignment to constant variable. 