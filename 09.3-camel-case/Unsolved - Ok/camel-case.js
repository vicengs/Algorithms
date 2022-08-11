// Write code to create a function that accepts a string and returns the string in camelCase
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var camelCase = function(str) {
    var space = false;
    var newStr = "";
    for (i=0; i<str.length; i++){
        if (str[i] === " "){
            space = true;
        }else{
            if (space){
                newStr = newStr + str[i].toUpperCase();
            }else{
                newStr = newStr + str[i].toLowerCase();
            };
            space = false;
        };
    };
    return newStr;
};