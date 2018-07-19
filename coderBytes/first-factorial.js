function firstFactorial(num) { 
    var factorial = num;
    for (var i = 1; i < num; i++) {
        factorial *= (num - i);
    }
  // code goes here  
  return factorial; 
         
}