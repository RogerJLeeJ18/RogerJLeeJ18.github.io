//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var valueArr = [];
    for (var key in object) {
        valueArr.push(object[key])
    }
    return valueArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // debugger;
    var valueStr = ''
    var keysArr = Object.keys(object)
    for (var i = 0; i < keysArr.length; i++) {
        if (typeof object[keysArr[i]] === 'string') {
        valueStr += object[keysArr[i]] + ' ';
        }
    }
    return valueStr.slice(0, valueStr.length - 1);
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if (typeof collection === 'object') {
        return 'object';
    } else {
        return 'Error';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1, string.length)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // var capWords = '';
    // for (var i = 0; i < string.length; i++) {
    //     if (string.indexOf(' ') !== -1) {
            
    //         capWords += string.slice()
    //     }
    // }
    //debugger;
    var strArray = string.split(' ')
    var altArray = [];
    for (var i = 0; i < strArray.length; i++) {
        altArray.push(strArray[i][0].toUpperCase() + strArray[i].slice(1, strArray[i].length));
    }
    return altArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name[0].toUpperCase() + object.name.slice(1, object.name.length);
    return 'Welcome ' + name + '!'; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = object.name[0].toUpperCase() + object.name.slice(1, object.name.length)
    var species = object.species[0].toUpperCase() + object.species.slice(1, object.species.length)
    return name + ' is a ' + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(' '); 
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //return string.includes(word);
    var strArray = string.split(' ');
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i] === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //debugger;
    if(object.friends && object.friends.length > 0) {
        for (var i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    debugger;
    var notFriends = []
    for (var i = 0; i < array.length; i++) {
        const person = array[i];
        if (!isFriend(name, person) && person.name !== name) {
            notFriends.push(array[i].name);   
        }
    }
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        for (var key in object) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var uniqueArr = [];
    var check  = (element) => {
        for (var j = 0; j < uniqueArr.length; j++) {
            if (uniqueArr[j] === element) {
                return true;
            }
        }
        return false;
    };
    for (var i = 0; i < array.length; i++) {
        if (!check(array[i])) {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}