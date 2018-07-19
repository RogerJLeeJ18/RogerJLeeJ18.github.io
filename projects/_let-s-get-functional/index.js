// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lowdown-rogerjleej18');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 * 
 * 4. To test your work, run the following command in your terminal:
 * 
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return array.filter(function (element, index, array) {
        return element.gender === 'male';
    }).length;
};

var femaleCount = function(array) {
    return array.reduce(function(previous, element, index) {
        if (element.gender === 'female') {
            previous.push(element);
        }
        return previous;
    }, []).length
};

var oldestCustomer = function(array) {
    return array.reduce(function (previous, element,  index) {
        if (element.age > previous.age) {
            return element
        } else {
            return previous
        }
    },array[0]).name
};

var youngestCustomer = function(array) {
    return array.reduce(function (previous, element,  index) {
        if (element.age < previous.age) {
            return element;
        } else {
            return previous;
        }
    }, array[0]).name;
};

var averageBalance = function(array) {
    return array.reduce(function(previous,element, index) {
        var removedDollarSign = element.balance.replace('$', '');
        element.balance = removedDollarSign.replace(',', '');
        return previous += Number(element.balance);
    }, 0) / array.length;
};

var firstLetterCount = function(array, letter) {
    return array.filter(function(element, index, array) {
        return element.name[0].toUpperCase() === letter.toUpperCase();
    }).length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    var friendsThatStartWith = [];
    var friendsofCustomer = array.filter(function(element, index, array){
        return element.name === customer; 
    })[0].friends;
    
    _.each(friendsofCustomer, function(element, index, array) {
        if (element.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            friendsThatStartWith.push(element);
        }
    });
    return friendsThatStartWith.length;
};

var friendsCount = function(array, name) {
    var friendNames = [];
    var onlyFriends = array.filter(function(element, index, array){
       var arr = [];
       for (var i = 0; i < element.friends.length; i++) {
           if (element.friends[i].name === name) {
               arr.push(element.name);
           }
       }
       return arr.includes(element.name);
    });
    _.each(onlyFriends, function(element, index, array) {
        friendNames.push(element.name);
    });
    return friendNames;
};

var topThreeTags = function(customers) {
    var tagArray = [];
    var obj = {};
    _.each(customers, function(element, index, array) {
        _.each(element['tags'], function(tag, i, array) {
            if(!obj[tag]) {
                obj[tag] = 1;
            } else {
                obj[tag]++;
            }
        });
    });
    for(var key in obj) {
        tagArray.push({name: key, count: obj[key]})
    }
    var topThree = tagArray.sort(function (tag1, tag2) {
        return tag1.count - tag2.count;
    }). slice(tagArray.length - 3)
  
    //var topThree = tagArray.slice(tagArray.length - 3, tagArray.length)
  
    return topThree.map(function(element, index, array) {
        return element.name;
    });
};

var genderCount = function(array) {
    var obj = {male: maleCount(array), female: femaleCount(array), transgender: 0};
    obj.transgender = array.reduce(function(previous, element, index) {
        if (element.gender === 'transgender') {
            previous.push(element);
        }
        return previous;
    }, []).length;
    return obj;
};
 
//     var obj = {female: 0, male: 0, transgender: 0};
//     array.reduce(function(previous, element, index) {
//       if (previous.gender === 'male') {
//           obj.male++;
//           return element;
//       } else if (previous.gender === 'female') {
//           obj.female++;
//           return element;
//       } else if (previous.gender === 'transgender') {
//           obj.transgender++;
//           return element;
//       }
//     });
//     return obj;
// };

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
