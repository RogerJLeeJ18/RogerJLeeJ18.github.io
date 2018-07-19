/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables 
 * are named identifiers that can point to values of a particular type, like a Number, String, 
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we 
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; 

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized 
 * it to anything 
 */ 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 1. Var
// a. Variables defined using var can be used dynamically. They can be reassigned if need be. They have global scope
    var x = 5 // x is 5
    x = 13 // x is 13
// 2. Const
// a. Variables defined using const cannot be changed or reassigned and must be defined at declaration. They are block scoped
    const g = "Always";
    //g = "Never"; // throws error because g is already defined
// 3. Let
// a. Variables defined using let are block scoped and can be reassigned.
   let z = 7
   z = 25;
   
/* Hoisting
variables are hoisted to the top of their scope. They are found before a code begins to run. Variables are not hoisted with thier values however
they are not given their value until initialization. 
*/
var red = "blood"; // the variable red is recognized throughout the code because it is hoisted, but it will not equal 'blood'
                   // until this line.




