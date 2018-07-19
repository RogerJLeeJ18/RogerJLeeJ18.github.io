/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Implement a function called search with a signature of search(animals, name) { //... } that:
// Takes a paramater representing an Array of animals. x
// Takes a paramater representing a String, the name of an animal on which to perform a search. x
// Looks through the animals Array, x
// returns the animal's Object if an animal with that name exists.
// Returns null if no animal with that name exists

function search(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called replace with a signature of replace(animals, name, replacement) { //... } that:
// Takes 3 parameters: x
// an Array of animals, x
// a name of an animal on which to perform a search, x
// and an OBJECT that represents the replacement animal. x
// If an animal with that name exists within the animals Array, REPLACE it's entire OBJECT with the replacement OBJECT.
// Otherwise do nothing.

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
           animals[i] = replacement; 
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called remove with a signature of remove(animals, name) that:
// Takes 2 parameters:
// an Array of animals, 
// and a name of an animal on which to perform a search.
// If an animal with that name exists within the animals Array, remove it.

function remove(animals, name) {
    for (var j = 0; j < animals.length; j++) {
        if (animals[j].name === name) {
            return animals.splice(animals[j], 1);    
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called add with a signature of add(animals, animal) { //... } that:
// Takes 2 parameter:
// an Array of animals, 
// and an OBJECT representing a new animal to be added.
// Checks that the animal OBJECT has a name property with a length > 0.
// Checks that the animal OBJECT has a species property with a length > 0.
// Has a unique name, meaning no other animals have that name.
// Adds this new Object to the animals Array, only if all the other conditions pass.
// Make sure it works.

function add(animals, animal) {
    if (animal.name.length > 0 && animal.species.length > 0) {
        for (var i = 0; i < animals.length; i++) {
        var sameName = animals[i].name;
        if (sameName === animal.name) {
            return;
        }
    }
    return animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
