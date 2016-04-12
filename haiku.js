var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var library = formatData(cmudictFile);

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
  var lines = data.toString().split("\n"),
       lineSplit,
       syllables;

  var library = [];

    lines = lines.splice(0,lines.length-1);
    lines.forEach(function(line){    
    lineSplit = line.split("  "); 
    
    syllables = syllableCount(lineSplit[1]);

    library = createLibrary(library, lineSplit[0], syllables);
  
    //console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]); 

  });  
    return library;
}

function syllableCount(arr){
  var numbers = arr.match(/\d+/g) || 0;
  var count = numbers.length;

  return count;
}

function createLibrary(library, word, syllable){ 

  library[syllable] ? library[syllable].push(word) : library[syllable] = [];
  //console.log(syllableArr)
  return library;

}

module.exports = library;

// var fs = require ('fs');

// //console.log( fs );
// //console.log(module);
// function createHaiku(structure){
//     console.log("this should log a haiku with the structure " + structure);
// }
// module.exports = {
//   createHaiku: createHaiku
// };





