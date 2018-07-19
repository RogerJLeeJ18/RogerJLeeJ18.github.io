function simpleSymbols(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < str.length; i++) {
        let letterPosition = alphabet.indexOf(str[i].toLowerCase()); 
        if (letterPosition !== -1) {
            if(str[i-1] !== '+' || str[i+1] !== '+') {
                return false
            }
        }
    }
    return true; 
}