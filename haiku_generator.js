var library = require('./haiku');

var structure = [[5],[7],[5]];

console.log(createHaiku(structure, library))

function createHaiku(structure, syllabelsArr){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllabelsArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

// var haiku = require('./haiku');

// haiku.createHaiku([5, 7, 5])