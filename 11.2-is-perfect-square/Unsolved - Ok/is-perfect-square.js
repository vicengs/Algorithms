// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var isPerfectSquare = function(num) {
    for (i=0; i<=num; i++){
        if (i * i === num ){
            return true;
        };
    };
    return false;
};