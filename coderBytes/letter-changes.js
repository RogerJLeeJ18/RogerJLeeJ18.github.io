function letterChanges(str) { 
    // create a string of all the letters in the alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // create an empty string
    let newString = ''
    //for each character in str
    for (let i = 0; i < str.length; i++) {
        var position = alphabet.indexOf(str[i])
        // if the alphabet has an index of the current element
        if (position !== -1) {
            // if its z add a capital A to the empty string
            if (str[i] === 'z') {
                newString += 'A';
            } else if (str[i] === 'd' || str[i] === 'h' || str[i] === 'n' || str[i] === 't') {
                // add the index that returns plus 1 of the alphabet string to the empty string
                newString += alphabet[position + 1].toUpperCase();
            } else {
                newString += alphabet[position + 1];
            }
        } else {
        // otherwise add the current element to the empty string
            newString += str[i];
        } 
    }
    return newString; 
}