// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
// Solved by Vicente Garcia Sepulveda on 08/09/2022
var titleCase = function(str) {
    var space = " ";
    var newStr = "";
    for (i=0; i<str.length; i++){
        if (space === " "){
            newStr = newStr + str[i].toUpperCase();
        }else{
            newStr = newStr + str[i];
        };
        space = str[i];
    };
    return newStr;
};