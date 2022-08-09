// Write code to create a function that returns the factorial of `num`
// Solved by Vicente Garcia Sepulveda on 08/09/2022
var factorial = function(num) {
    var result = 1;
    for (i=2; i<=num; i++){
        result = result * i;
    };
    return result;
};