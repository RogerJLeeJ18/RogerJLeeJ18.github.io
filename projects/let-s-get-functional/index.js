// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-rogerjleej18");

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
    return _.filter(array, function(customer, i) {
        return customer.gender === 'male';
    }).length
};

var femaleCount = (customers) => {
    return _.reduce(customers, function(femaleAmount, customer, i) {
        if (customer.gender === 'female') {
            femaleAmount++;
        }
        return femaleAmount;
    }, 0)
};

var oldestCustomer = (customers) => {
    return _.reduce(customers, function(thisCustomer, nextCustomer){
        if (thisCustomer.age < nextCustomer.age) {
            return nextCustomer;
        }
        return thisCustomer;
    }).name
};

var youngestCustomer = (customers) =>  {
    return _.reduce(customers, function(thisCustomer, nextCustomer){
        if (thisCustomer.age > nextCustomer.age) {
            return nextCustomer;
        }
        return thisCustomer;
    }).name
};

var averageBalance = (customers) => {
    return _.reduce(customers, function(totalBalance, customer){
        totalBalance += Number(customer.balance.slice(1).replace(',',''));
        return totalBalance;
    }, 0) / customers.length;
};

var firstLetterCount = (customers, letter) => {
  return _.filter(customers, (customer) => customer.name[0].toUpperCase() === letter.toUpperCase()).length;  
};

// var friendFirstLetterCount = (customers, customer, letter) => {
//     // var num = 0;
//     // var friends = _.filter(customers, function(element) {
//     //     return element.name === customer;
//     // }).join().friends
    
//     // _.each(friends, function (friend) {
//     //     if(friend.name[0].toUpperCase() === letter.toUpperCase()) {
//     //         num++;
//     //     }
//     // })
//     // return num;

// };
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

var friendsCount = (array, name) => {
    return _.reduce(array, function(previous, customer, index) {
        if (_.some(customer.friends, function(element) {
             return element.name === name;
            })) {
            previous.push(customer.name);        
        }
        return previous;
    }, []);
};

// var topThreeTags = (customers) => {
    
// };
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


var genderCount = (customers) => {
    var obj = {
        male: maleCount(customers),
        female: femaleCount(customers),
        transgender: _.reduce(customers, function(count, customer) {
            if (customer.gender === 'transgender') {
                count++;
            }
            return count;
        }, 0)
    };
    return obj;
};

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

