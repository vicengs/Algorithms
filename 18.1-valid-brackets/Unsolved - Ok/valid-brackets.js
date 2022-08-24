// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false
// Solved by Vicente Garcia Sepulveda on 08/24/2022
const validBrackets = function(str) {
    var position = 0;
    var openBrackets = ["(","{","["];
    var endBrackets = [")","}","]"];
    var noSpacesStr = str.replace(/\s+/g, "");
    for (i=0; i<noSpacesStr.length; i++){
        position = endBrackets.indexOf(noSpacesStr[i])
        if (position >= 0){
            if (openBrackets.indexOf(noSpacesStr[i-1]) === position){
                return true;
            };
        };
    };
    return false;
};