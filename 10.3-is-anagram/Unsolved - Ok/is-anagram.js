// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var isAnagram = function(strA, strB) {
    var strAmap = {};
    var strBmap = {};
    if (strA.length != strB.length){
        return false;
    }else{
        for (i=0; i<strA.length; i++){
            strAmap[strA[i]] = (strAmap[strA[i]]||0)+1;
            strBmap[strB[i]] = (strBmap[strB[i]]||0)+1;
        };
        for (letter in strBmap){
            if (strAmap[letter] != strBmap[letter]){
                return false;
            };
        };
    };
    return true;
};