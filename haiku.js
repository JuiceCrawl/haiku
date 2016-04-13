//This structures the dictionary into an array for easy lookup with syllables

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
      library = createLibrary(lineSplit[0], syllables, library);
  });  
    //console.log(library)
    return library;
}

function syllableCount(arr){
  var numbers = arr.match(/\d+/g) || 0;
  var count = numbers.length;

  return count;
}

function createLibrary(word, syllable, library){ 

  library[syllable] ? library[syllable].push(word) : library[syllable] = [];
  
  return library;
}

module.exports = library;