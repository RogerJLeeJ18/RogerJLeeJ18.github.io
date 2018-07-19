/*

CONTROL FLOW

   1. If
      i. If statements are statements designed to execute code if a certain condition is true or not.
         If statements take booleans as data
*/
   var x = 2;
   if (x === 2) {
       console.log("Not Enough!"); // executes the code in this block because  the condition x === 2 is true
   }
/* 
   2. Else if
      i. In addition to a beginning if statement, & behaving the same way, Else if statements create the ability for us to 
         chain code to add more options or a flow to our code. Including the first if statement each condition is checked, in chronological order, for their truthyness, and 
         it stops & executes the first block of code, if any, it comes across with a true condition.
*/
   x = 2;
   if (x === 2) {
       console.log("Not Enough!");
   } else if (x > 1) {          // though this condition would test true as well it is not even read because the first if condition stopped the code    
       console.log("Okay");
   }
/* 
   3. Else
      i. Else statements are added after your if statement or else if chain to give a default if none of the conditions were true;
*/ 
   var y = true;
   if (!true === y) {
       console.log("You Cheater!");
   } else {
       console.log("Thanks for not lying.");
   }
/*
   4. Switch
      i. Switch is designed to take the place of an if / else fo the purposes of a cleaner looking code.
         It takes a input expression & test its value against cases. if it passes the code for the case executes. Like an else statement
         a default can be made.
*/
   var card = 'J'
   switch (card) {
       case 'A': 
       case 'K':
           console.log("High-Roller");
           break;
       case 'Q':
       case  'J':
           console.log("Step It Up");
           break;
       default: 
           console.log("Go Home");
   }