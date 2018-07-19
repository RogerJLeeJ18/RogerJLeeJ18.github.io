function longestWord(sen) { 
    let senArrayWithJusWords = sen.split(' ').map(word => word.replace(/\W/g, ''));
  // code goes here  
  // go through the array & return jus one word
    let longestWord = senArrayWithJusWords.reduce((longestWord, word) => {
        if (longestWord.length >= word.length) {
            return longestWord;
        }
        return word;
    }); 
    return longestWord;
}