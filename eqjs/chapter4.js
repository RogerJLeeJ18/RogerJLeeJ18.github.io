// Exercise 1: Sum of A Range
const range = (num1, num2, step) => {
  var numArr = [];
    if (num1 < num2) {
      for (var i = num1; i < num2 + 1; step ? i += step : i++) {
        numArr.push(i);
      }
    } else if (num1 > num2) {
  	  for (var j = num1; j > num2 - 1; step ? j += step : j--) {
        numArr.push(j);
      }
    }
  return numArr;
};

const sum = numbers => {
  var total = 0;
  numbers.forEach(function(num) {
    total += num;
  });
  return total;
};

// Exercise 2: Reversing An Array

let reverseArray = function(array) {
	let newArr = [];
  	for (let i = array.length-1; i > -1; i--) {
    	newArr.push(array[i]);
    }
  	return newArr;
};

let reverseArrayInPlace = function(array) {
	for (let i = 0; i < array.length; i++) {
    	array.unshift(array[i]);
      	array.splice(i,1);
    }
  return array;
};

// Exercise 3: A List

let arrayToList = function(array) {
	if (array.length === 1) {
    	// return an object with a value key with value of the element and rest key with value null.
      	return {value: array[0], rest: null};
    }
  	return {value: array[0], rest: arrayToList(array.slice(1))};
};

let listToArray = function(list) {
	if (list.rest === null) {
    	return [list.value];
    }
  	return [list.value].concat(listToArray(list.rest));
};

let prepend = function(value, list) {
	return {value: value, rest: list};
};

let nth = function(list, num) {
  	if (num > -1) {
  		if (num === 0) {
    		return list.value;
    	}
      	if (list.rest === null) {
        	return undefined;
        }
  		return nth(list.rest, num-1);
    }
};

// Exercise 4: Deep Comparison
let deepEqual = function(val1, val2) {
  	if (val1 === null || val2 === null) {
    	return val1 === val2;
    }
  	if (Array.isArray(val1) && Array.isArray(val2)) {
      	for (let i = 0; i < val1.length; i++) {
        	if (!deepEqual(val1[i], val2[i])) {
            	return false;
        	}
        }
    	return true;
    }
  	if (typeof val1 === 'object' && typeof val2 === 'object') {
    	let val1Keys = Object.keys(val1);
      	let val2Keys = Object.keys(val2);
      	for (let i = 0; i < val1Keys.length; i++) {
          	if (val1Keys[i] !== val2Keys[i]) {
            	return false;
            }
        	if (!deepEqual(val1[val1Keys[i]], val2[val2Keys[i]])) {
            	return false;
        	}
        }
      	return true;
    }
  	return val1 === val2;
};