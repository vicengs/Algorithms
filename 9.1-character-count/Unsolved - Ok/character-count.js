// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string
// Solved by Vicente Garcia Sepulveda on 08/09/2022
var characterCount = function(str) {
    var wordCount = {};
    var word = "";
    for (i=0; i<str.length; i++){
        word = str[i];
        wordCount[word] = (wordCount[word] ?? 0) + 1 ;
    };
    return wordCount ;
};