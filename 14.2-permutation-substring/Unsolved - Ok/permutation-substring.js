// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false
// Solved by Vicente Garcia Sepulveda on 08/23/2022
var permutationSubstring = function(str, sub) {
    var compareStr = [];
    for (i=0; i<sub.length; i++){
        for (j=0; j<str.length; j++){
            if (str[j]===sub[i]){
                compareStr = compareStr + str.substr(j, 1);
                break;
            };
        };
    };
    if (sub.length === compareStr.length){
        return true;
    };
    return false;
};