// Exercise 1: Minimum

let min = function(num1, num2) {
	if (num1 < num2) {
    	return num1;
    }
  	return num2;
};

// Exercise 2: Recursion

let isEven = function(n) {
	if (n === 1 || n === -1) {
    	return false;
    }
  	if (n === 0) {
    	return true;
    }
  	return n > 0 ? isEven(n-2) : isEven(n+2);
};
// Exercise: Bean Counting
let countBs = function(string) {
	let count = 0;
  	for (let i = 0; i < string.length; i++) {
    	if (string[i] === 'B') {
        	count++;
        }
    }
  	return count;
};

let countChar = function(string, char) {
	let count = 0;
  	for (let i = 0; i < string.length; i++) {
    	if (string[i] === char) {
        	count++;
        }
    }
  	return count;
};