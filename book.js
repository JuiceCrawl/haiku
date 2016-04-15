var fs = require("fs");
var library = require('./haiku2'); //uses the library in Object form
var book = fs.readFileSync('./WizardOfOz.txt').toString();

var bookArray = formatData(book);
var haikus = checkForHaiku(bookArray)
console.log(haikus)

function formatData(data){    
  var words = data.toString().split("\r").join(' ').split("\n").join(' ').split(' ');
  var arr = [],
    count = 0,
    syllable;
    
  words.forEach(function(word){ 
    if(word !== "" && word !== undefined){
      word = word.replace(/\W/g, ''); //remove punctuation at end only, but isn't actually removing anything
      syllable = library[word.toUpperCase()] //shows undefined for some words
      if(syllable !== undefined){
        arr.push(word);
      }
    }
  });
  return arr;
}

function checkForHaiku(arr){
  //var randomNum = Math.floor(Math.random() * arr.length);
  var randomNum = 0;
  var goal = [5,7,5];
  var word = arr[randomNum];
  var haikuList = [];
  var syllable;
  
  for(var i = 0; i < goal.length; i++){
    syllable = library[word.toUpperCase()];
    goal[i] -= syllable;
    
    while(goal[i] > 0){
      haikuList.push(word);
      randomNum++
      word = arr[randomNum];
      syllable = library[word.toUpperCase()]
      goal[i] -= syllable;
        if(goal[i] === 0){
          haikuList.push(word);
        }
    }
    
    if(goal[i] < 0){
      checkForHaiku(arr);
    }
    randomNum++
    word = arr[randomNum];
    //if === 0 then just moves to next indice automatically
    haikuList.push('\n');
  }
  console.log(haikuList.join(" "))
  return haikuList.join(" ");
}