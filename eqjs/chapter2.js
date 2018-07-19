// Exercise 1: Looping A Triangle
var hashtag = '';
for (let i = 0; i < 7; i++) {
  hashtag += '#';
  console.log(hashtag);
}

//Exercise 2: FizzBuzz
const FizzBuzz = function() {
  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

//Exercise 3: ChessBoard;
function hashtagGrid(size) {
    var hashtagString = '';
    for(var rowCount = 0; rowCount < size; rowCount++) {
      if (rowCount % 2) {
        for(var widthCount = 0; widthCount < size; widthCount++ ) {
          if(widthCount % 2) {
            hashtagString += '#';
          } else {
            hashtagString += ' ';
          }
        }
      } else {
        for(var widthCount = 0; widthCount < size; widthCount++ ) {
          if(widthCount % 2) {
            hashtagString += '#';
          } else {
            hashtagString += ' ';
          }
        }
      }
      if (rowCount === size -1) {
        return hashtagString;
      }
      hashtagString += '/n';
    }
}

// console.log(hashtagGrid(9));

//  Your code here.
// var size = 8;
// var checkeredString = ''
// for (var i = 0; i < size; i ++) {
//   if (i % 2 === 0) {
//     for (var j = 0; j < size; j++) {
//     if (j 
//     checkeredString += hashtagFirst + '\n';
//     }
//   } else {
//     var spaceFirst = ' # # # #';
//     checkeredString += spaceFirst + '\n';
//   }
// }
// console.log(checkeredString);