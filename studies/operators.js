/**
 * OPERATORS
*/

//  Operators simply allow our code run by telling it what to do with the our values.
//  There are different many types of operators which allow us to do different things.
    
//  1. Assignment: equivalates a variable to the desired data type
//  =   Equals
    var a = "Hey"
    
//  +=	Plus Equals
    a += "There." // "Hey There."
    
//  -=	Minus Equals
     var b = 7
     b -= 3 // 4
    
//  *=	Times Equals
    var c = 10
    c *= 7 // 70
    
//  /=	Divided Equals
    var d = 18
    d /= 9 // 2
    
//  %=  Remainder Equals
    var e = 25
    e %= 3 // 1
    
//  2. Arithmetic: Performs Math
//  +	Addition
    6 + 7 // 13
    "Not" + " Mine" // "Not Mine"
    
//  -	Subtraction
    10 - 13 // -3
    
//  *	Multiplication
    8 * 700 // 5600
    
//  /	Division
    22 / 4 // 5.5
    
//  %	Modulus (Remainder)
    20 % 3 // 2
//  ++	Increment (+1)
    var f = 93;
    f++; // 9
    ++f // 93
    
//  --	Decrement (-1)
    var g = 32
    --g // 11
    g-- // 34
    
//  3. Comparison: Takes two data types and compares them on a true/false basis
//  ==	equal to: type doesn't matter
    8 == '8' // true
    
//  ===	equal value and equal type
    9 === '9' // false
    'Hey' === 'Hey' // true
    'No' === 'no' // false
    
//  !=	not equal
    8 != '12' // true
    
//  !==	not equal value or not equal type
    86 !== 86 // true
    12 !== '12' // true
    
//  >	greater than
    10 > 12 // false
    
//  <	less than
    9 < 106 // true
    
//  >=	greater than or equal to
    13 >= 13 // true
    
//  <=	less than or equal to
    1264 <= 3009 // true
   
    
//  4. Logical: Determines the logic of a code on a true/false basis
    var k = 7 
    var j = 25
//  &&	logical and: both are true
    j === 25 && k === 7 // true
    k === 6 && j === 25 // false
    
//  ||	logical or: one or the other is true
    k === 9 || j === 25 // true
    k === 12 || j === 6 // false
    
//  5. Binary: one operand
//  typeof: Determines the type and returns a string of the type
//       (Be wiery because typeof returns 'object' for array, dates, & null)
    typeof 6 // 'number'
    typeof NaN // 'number'
    typeof "7" // "string"
    typeof console.log // 'function'
    typeof {} // 'object'
    typeof Date // 'object' : use instance of to determine if this is a date
    typeof [] // ' object' : use the constructor function Array.isArray()
                        //   to determine if it's an array
    
//  ! : means not, or not true
    !7 // false
    !"yellow" // false
    
//  - : returns NaN if put in front of somethiing that's not a number & 0 if put in front an array
    -"red" // Nan
    -function() {} // NaN
    -{} // NaN
    -[] // 0
    
//  6.  Ternary: takes three operands
//  ?	ternary operator : only JS operator that takes three operands
//                         if condition true return expression 1 if not return expression 2 
//  condition ? exp 1 : exp 2
    true ? "red" : "yellow" // "red"
    false ? "purple" : 3 // 3