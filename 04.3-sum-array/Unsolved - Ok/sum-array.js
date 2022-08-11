// Write code to add all the numbers in `arr` and return the total
// Solved by Vicente Garcia Sepulveda on 08/08/2022
var sumArray = function(arr) {
    var result = 0;
    for (i=0; i<arr.length; i++){
        result = result + arr[i];
    };
    return result;
};