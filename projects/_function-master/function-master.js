//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = []
    for (var key in object) {
        arr.push(object[key]);
    } 
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = []
    for (var key in object) {
        arr.push(key)
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = []
    for (var key in object) {
        if (typeof object[key] === 'string') {
            arr.push(object[key])
        }    
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array'
    } else if (typeof collection === 'object') {
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var newChar = string[0].toUpperCase();
    return string.replace(string[0], newChar)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

       var arr = string.split(" ", string.length)
       var newArray = []
       for (var i = 0; i < arr.length; i++) {
           var upperCased = arr[i][0].toUpperCase();
           newArray.push(arr[i].replace(arr[i][0], upperCased));
       }
       return newArray.join(" ");
       
       
       
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    object.name = object.name[0].toUpperCase() + object.name.slice(1)
        // console.log("Welcome " + object.name + "!");
        return "Welcome " + object.name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    object.name = object.name[0].toUpperCase() + object.name.slice(1)
    object.species = object.species[0].toUpperCase() + object.species.slice(1)
    // console.log(object.name + " is a " + object.species);
    return object.name + " is a " + object.species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (!object.noises || object.noises.length === 0) {
        return 'there are no noises';
    }
    return object.noises.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);
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
    if (object.friends === undefined) {
        return false;
    }
    if (object.friends.indexOf(name) === -1) {
        return false;
    }
    else if (typeof object.friends.indexOf(name) === 'number') {
        // console.log(true);
        return true;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var arr = [];
  var friends = [];
  for (var i = 0; i < array.length; ++i) {
    if (array[i].name === name) {
    friends = array[i].friends;
    }
  }
//   console.log(friends);
  for (var i = 0; i < array.length; ++i) {
     if (friends.includes(array[i].name) === false && array[i].name !== name) {
     arr.push(array[i].name);
     }
  }
//  console.log(array);
  return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    //console.log(object[key])
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
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if(arr.includes(array[i]) === false) {
            arr.push(array[i]);
        }
    }
    return arr;
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