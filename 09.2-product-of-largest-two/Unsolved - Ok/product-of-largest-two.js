// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two
// Solved by Vicente Garcia Sepulveda on 08/09/2022
var productOfLargestTwo = function(arr) {
    var max = arr[0];
    var secondMax = 0;
    for (i=1; i<arr.length; i++){
        if (arr[i] > max){
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax){
            secondMax = arr[i];
        };
    };
    return max * secondMax;
};