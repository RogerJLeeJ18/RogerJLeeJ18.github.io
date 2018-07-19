/**
 * Data-types
 *
 * A data-type is a type of value. It can be given to variables to define them.
 * 0. Number
 * Numeric values or data.
 */
var num = 3;
var sum = 17 + 178;

/* 
1. String
* Strings are charcter data. They are recognized by their enclosure of either single ('') or double ("") qoutes.
*/
var string = "Roger";
var sentence = "I love Roger\'s neighbourhood"; // Notice the backslash b4 the apostrophe(') s 
var numInString = "123"; //  Recognized as string data because of it appearing inside qoutes("")

/* Strings can be thought of as an array of characters (U recognize a word by the order of it's characters)
   As such like an array each character in a string can be represented as an index (number) and accessed by BRACKET NOTATION ([]) 
*/

/* 
2. Boolean 
* data that represents a value of either true or false.
*/
var yes = true; 
var no = false;

/* 
3. NaN
Not a Number. when trying to access a number and nothing is found.
*/
var notExist = 1 / "two";

/* 
4. undefined
Has no value. Automatically given as a default by Javascript for an idetifier not without anassigned value. It can also be assigned.
*/
var myName;
var noValue = undefined;

/* 
3. null
Does not have a value. However a variable or identifier has to be assigned null.
*/
var wreckedCar = null;


/* 
6. FUNCTION
a data-type that can store code to be executed on if called upon. 
*/ 
function functionName() {}; // basic outlay
// Functions can be given a name or stay anonymous

function add() {
    1 + 1
};
//  the above function is hard- coded, which ruins its magic. It can be given parameters, or placeholders, to be used in the code block;
function multiply(param1, param2) {
    return param1 * param2; // function automatically is undefined in JS
}
// When calling on a function you'd replace the parameters for arguments, which are actual values passed thru the function;
multiply(1, 2); // calls th multiply function & executes with arguments(args) 1 & 2 replace param1 & param2 in execution 


//7. ARRAYS
var array = []; // empty literal array
// An array is a colection of data in an ordered list
// Arrays hold or collect values even other arrays & can grow indefinitely in size. This makes it a complex data type.
var complexArray = [true, "Tigre", 98, null, {favColor: "Purple"}, [17, false] ]; 
 
/* The values or elements in an array can be accessed using array notation better known as BRACKET NOTATION ([]). Using an elements index inside the brackets.
   VERY IMPORTANT: Arrays are 0-indexed which means the first element in the array has a index of 0 
   
   array[index] = value
*/  
// index:  0, 1, 2, 3, 4
var arr = [1, 2, 3, 4, 5]
arr[2]; // is the number 3

// Arrays have a length property which gives u the number of elements in an array 
arr.length 

// Because the first element of an array represents the zero index and they both increase by one for every element in the array.
// The total number of elements in any array will be 1 interger greater than the index of the last element. This means the last index can be represented by the length of the array - 1.
arr[arr.length-1]; // the value of the arrays last element

// You can use for loops to loop over arrays.

//to test true or false if a data type is an array  
Array.isArray();


// 8. OBJECTS
var obj = {}; // a literal empty object
/* Objects are a data type that hold data in key / value pairs.
   They are complex because they hold or collect values even other objects & they can grow in size indefinitely.
  
They are a collection of keys, which are basically strings, & the values they hold which can be other data types even another object.
*/ 
var complexObj = {
    boolean: false, 
    number: 4, 
    string: "Happy", 
    array: [1, 2], 
    nestedObj: {}
};

/*They can be thought of as associative arrays because there is an association between a key and it"s value.
  Since a key can be thought of as an named index for a value, values in an object can be accesed using array notation/ bracket notation
*/
/* Accesing values
a. BRACKET NOTATION
*/
complexObj["boolean"]; // accessing the value (false) of the key (boolean)... Note the key must be qoues
/*
b. DOT NOTATION
*/
//Or you can use DOT SYNTAX to access the value
complexObj.string; // accessing the value ("Happy") of the key (string)
/*
You can use the Object.keys() function to return the keys of an object
*/
Object.keys(complexObj); // returns keys of object in an array

// Use for in loops to loop over an obj


// 9. Infinity & -Infinity
// a. Infinity
//    numeric value that represents infinity.
var bigNumber = Infinity
// the value infinity is greater than any other number
// any number divided by infinity = 0  
var divideByInfinity = 62 / Infinity; // 0

// b. -Infinity
//    numeric value that reresents -Infinity.
var smallNumber = -Infinity;
// the value -infinity is less than any other number


// Simple VS. Complex
/*
simple data types don't collect other values only their own
*
complex data types can collect all types of values 



simple data types copy by value
*
complex data types copy by reference



simple data types can contain a max of 8 bytes of memory
*
complex data types can grow indefinitely
*/