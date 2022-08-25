// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number
// Solved by Vicente Garcia Sepulveda on 08/24/2022
var isArmstrong = function(num) {
    var numStr = num.toString();
    var length = numStr.length;
    var armstrongNum = 0;
    var powerNum = 1;
    for (i=0; i<length; i++){
        powerNum = Math.pow(numStr[i], length);
        armstrongNum += powerNum;
    };
    return (numStr == armstrongNum);
};