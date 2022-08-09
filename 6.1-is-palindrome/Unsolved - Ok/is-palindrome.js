// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
// Solved by Vicente Garcia Sepulveda on 08/09/2022
var isPalindrome = function(str) {
    var inverseStr = "";
    for (i=str.length-1; i>=0; i--){
        inverseStr = inverseStr + str[i];
    };
    if (str === inverseStr){
        return true;
    };
    return false;
};