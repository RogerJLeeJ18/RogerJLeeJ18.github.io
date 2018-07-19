

/* FUNCTIONS:

1. Phases to Use
   In order to use a function we must do two things:
     i. First we must define our function. Say what you want to do.
*/      
     function newFun() { 
         return 5; // condition
     }
     
/*   ii. Now that the function has been made to use it we execute, invoke, or call it.
*/
     newFun();
/*
2. Parameters & Arguments
   i. Parameters for a function are placeholders u can use when creating a function to
      hold a place for values to be passed in later.
*/
   function myArg(param1) {
      return param1;
   } 
/*
   ii. Arguments are the actual values you'll replace the parameters of your function with 
       when calling it.
*/
   myArg(5); // returns 0.5
/*
3. Syntax
   i. a named functions syntax:
      a. keyword function : followed by a space
      b. name in camelCase of the function
      c. parenthses () : add parameters in these if any
      d. curly braces {} : put the ondition your function is executing in these 
*/   
   function namedFunc() {}
/*
4. Assigning Function to variable
   i. Declare a variable and assigning it to a function
*/   
   var v = function yes() {
      return true;
   };
/*
5. Specifying & Returning
   i. In order to specify an input in a function we define a parameter the function
   ii. In order to return a value we use the keyword return inside the curly braces of the 
       function of the code we want to return.
*/
   function newWord(param1, param2) {
      param2 = "ogoo";
      return param1 + param2;
   }
/*
6. Passing Simple & Complex Values
   i. Passing a simple value to a function does not change the value of the variable passed 
      thru the function
   
*/
   function doAnything(k) {
      return k * 3;
   }
   var g = 5;
   doAnything(g);
   console.log(g); // will still remain 5 if trying to console.log after being passed through the function, g = 5 is immutable till reassigned
/*
   ii. Passing a complex value to a function changes the value of the variable passed thru the function
*/
   function doAnother(k) {
      return k.push(5);
   }
   var c = [1, 2, 3, 4];
   console.log(c); // logging c before the function call will give u the original array 
   doAnother(c); // invoking the function doAnother will change c in this instance because push is an impure function
   console.log(c) // logging c after being passed through the function will show the value of c after being altered by doAnother
/*
7. Parent / Child Relationship
   i. As a child scope, function, of the parent scope, global, function has access to the variables declared in global scope
*/ 
   var k = 7
   function multiplying(a, b) {
      return a * b * k; // the function can reach the variable outside of the function
   }
/*
   ii. On the other hand, the parent scope, global, cannot access variables in the child scope, function
*/ 
   function dividing(c, d) {
      var f = 2
      return d / c / f; // variable f from this function is only available inside the function; var f is undefined outside the function 
   }
   // console.log(f) // f is undefined
/*
8. Closure
   i. A function has an occurence of a closure when a variable in the inner scope references one in an outer, parent scope. **/
   function multiplyAdd(x) {
      x *= 5;
      return function (y) {
         x += y;
         return x; // makes a reference to the variable x in the parent scope (the original function body)... variable x is the closure 
      };
   }
   
   
   
   
   
   
   
   
   









   
   
   
   
   
   
   