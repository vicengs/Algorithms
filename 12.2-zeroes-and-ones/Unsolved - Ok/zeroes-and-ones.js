// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var zeroesAndOnes = function(str) {
    var ones = 0, zeros = 0;
    for (i=0; i<str.length; i++){
        if(str[i] == 1){
            ones++;
        }else{
            zeros++;
        };
    };
    if (ones === zeros){
        return true;
    };
    return false;
};