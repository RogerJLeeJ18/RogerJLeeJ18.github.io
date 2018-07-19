function firstReverse(str) { 
    let reversestr = '';
    //loop through the string from the back to the beginning
    for (let i = str.length -1; i > -1; i--) {
        reversestr += str[i]
    }
    //add each character to a new string
    //return the string
  // code goes here  
  return reversestr; 
         
}