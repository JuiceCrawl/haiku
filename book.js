var fs = require("fs");
var library = require('./haiku2'); //uses the library in Object form
var book = fs.readFileSync('./WizardOfOz.txt').toString();

//var bookArray = formatData(book);
// var count = 0;

console.log(formatData(book))

function formatData(data){    
  var words = data.toString().split("\r").join(' ').split("\n").join(' ').split(' ');
  
  var count = 0;
    
  words.forEach(function(word){ 
    if(word !== "" && word !== undefined){
      word = word.replace(/\W$/g, ''); //remove punctuation at end only, but isn't actually removing anything
      console.log(library[word.toUpperCase()]) //shows undefined for some words
    }
  });
  
}

// function checkCount(syl, word){
//   count += syl;
//   //console.log(count)
//   if(count > 5){
//     //console.log('too big')
//   }

//   if(count === 5){
//     count = 0;
//     var count2 = count;
//     if(count2 === 7){
//       var count3 = count;
//       if(count3 === 5){
//         console.log("YES")
//       }
//     }
//   }
// }    
