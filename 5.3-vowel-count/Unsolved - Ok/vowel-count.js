// Write code to return the the number of vowels in `str`
// Solved by Vicente Garcia Sepulveda on 08/08/2022
var vowelCount = function(str) {
    var count = 0 ;
    var word;
    str = str.toLowerCase();
    for (i=0; i<str.length; i++){
        word = str[i];
        if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u"){
            count++;
        };
    };
    return count;
};