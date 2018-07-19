function letterCapitalize(str) { 
    let capitalSentence = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '); 
    return capitalSentence;
}