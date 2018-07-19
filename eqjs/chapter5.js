//Exercise 1: Flatening

let arrays = [[1, 2, 3], [4, 5], [6]];
let flatArray = arrays.reduce((flatArray, element) => {
	return flatArray.concat(element);
}, []);
console.log(flatArray);

// Exercise 2: Your Own Loop

let loop = (value, test, update, action) => {
    for(let i = value; i > 0; i--) {
        if(!test(i)) {
            return;
        }
        action(i);
        update(value);
    }
    return value;
};
loop(3, n => n > 0, n => n - 1, console.log);

// Exercise 3: Everything

let every = function(array, test) {
  // Your code here.
  for (let i = 0; i < array.length; i++) {
  	if (!test(array[i])) {
    	return false;
    }
  }
  return true;
};

let everyUsingSome = function(array, test) {
  return array.filter(e => [e].some(test) === true).length === array.length;
};

let newEvery = function(array, test) {
  // if (array.some(element => !test(element))) {
  //   return false;
  // }
  // return true;
  return !array.some(element => !test(element));
}

// Exercise 4: Dominant Writing Direction

function dominantDirection(text) {
  let charScripts = [];
  for (let char of text) {
  	charScripts.push(characterScript(char.codePointAt(0)))
  }
  let directionOfChar = charScripts.filter(script => script !== null)
  	.map(script => script.direction)
  let ltrChars = directionOfChar.filter(direction => direction === 'ltr').length;
  let rtlChars = directionOfChar.filter(direction => direction === 'rtl').length;
  let ttbChars = directionOfChar.filter(direction => direction === 'ttb').length;
  if (ltrChars > rtlChars && ltrChars > ttbChars) {
  	return 'ltr'
  }
  if (rtlChars > ltrChars && rtlChars > ttbChars) {
  	return 'rtl'
  }
  if (ttbChars > rtlChars && ttbChars > ltrChars) {
  	return 'ttb'
  } else {
  	return 'No Dominant Direction'
  }
}

function dominantDirection1(text) {
  return countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script !== null ? script.direction : undefined;
  }).filter(direction => direction.name !== undefined)
  	.reduce((dominantDirection, direction, i, a) => {
  		if (dominantDirection.count > direction.count) {
        	return dominantDirection
        }
    	return direction
  	}).name
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}