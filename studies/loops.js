/*
LOOPS

   Loops are constructs which allow you to perform an action a multiple number of times, 
   to eliminate redundancy in a code. In particular, they are very useful for iterating over
   collections of data such as objects or arrays.

      There are multiple types of loops that can be used:
      1. For Loop: allows you to count forward or backward through an array to get
         excess to it's indexes
         To make a for loop, after starting with the keyword for,
         you include the following in ():
         a. Starting position or index
         b. Stopping Condition
         c. Incrementation of the index between each iteration
                (Can also be a Decrement, but the start & condition will have to be adjusted)
*/    var array = ["Dog", "Cat", "Scorpion"];
      for (var index = 0; index < array.length; index++) {
          console.log(index);     // prints a number represening each index in array
          console.log(array[index]);    // prints "Dog" "Cat" "Scorpion"
      }
      
//    Decrementing:
      for (var index = array.length - 1; index > -1; index--) {
          console.log(index);    // prints a number
          console.log(array[index]);    // prints the element that corresponds with the index)
      }
//       Keep in mind if your index can never reach it's stopping point it is an infinte
//       and will continue forever, which would cause your code to crash.
/*
        
      2. For-in Loop: allows you to iterate through an object to access the keys of that object
         a. Create a variable & assing it to the keys in an object
         b. Condition of your loop in curly braces
*/
      var obj = {name: "Roger Journee",
                 favSport: "basketball"};
      
      for (var keys in obj) {
          console.log(keys); // prints the keys in my obj
          console.log(obj[keys]); // prints the values of those keys
      }
      
//    Object Keys in reverse:
      var arr = []
      for (var keys in obj) {
          arr.push(keys)
          arr.reverse()
      }
      for (var i = 0; i < arr.length; i++) {
            console.log(arr[i])
      }
      

//    3. While Loop: executes a block of code in the loop while a given condition is true.
      var num = 10;
      while(num >  3) {
         num--;
         console.log(num);
         
     }
     
     
     
     
     
     