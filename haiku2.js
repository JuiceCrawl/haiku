//This structures the dictionary into an Object for easy lookup with words

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

  var libraryObj = {};

    lines = lines.splice(0,lines.length-1);
    lines.forEach(function(line){    
      lineSplit = line.split("  ");  
      syllables = syllableCount(lineSplit[1]);
      return createLibrary(lineSplit[0], syllables, libraryObj);
  });  
    
    return libraryObj;
}

function syllableCount(arr){
  var numbers = arr.match(/\d+/g) || 0;
  var count = numbers.length;

  return count;
}

function createLibrary(word, syllable, library){ 
    library[word] = syllable;
  
  return library;
}

module.exports = library;