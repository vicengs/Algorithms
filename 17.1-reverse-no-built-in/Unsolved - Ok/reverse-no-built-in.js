// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method
// Solved by Vicente Garcia Sepulveda on 08/23/2022
const reverse = (str) => {
    var newStr = "";
    for (i=str.length-1; i>-1; i--){
        newStr = newStr+str[i];
    };
    return newStr;
};