/*
  
  STRING MANIPULATION
  
1. Manipulating string with operators
   i. Operators
      a. + : can add strings to other strings or numbers
*/
         "Hey" + " " + "You!"; // "Hey You!"
         "Hi-" + 5; // "Hi-5"
/*    
      b. += : store in a variable and use +=
*/
    var k = "Fire";
    k += "Squad";
/*
2. Manipulating strings with methods
   i. Methods
*/
   var string = "This World is Crazy";
   string.length; // gives a number of characters in the string
   
   var concatString = string.concat("sometimes"); // the same as + to a string
// indexes
   string[string.length-1];
   string[0];
   string[5];
   string.charAt(6);
   
   var upperStr = string.toUpperCase(); // string uppercased in new var
   var lowerStr = string.toLowerCase(); // string lowercased in new var
/*
     c. index of : finds the first instance of the given string
*/
   string.indexOf("World"); // finds 
   
   var slicedStr = string.slice(5, 10); // takes out string characters  in new var
   
   var newstr = string.replace("World", "Life"); // replace()
   