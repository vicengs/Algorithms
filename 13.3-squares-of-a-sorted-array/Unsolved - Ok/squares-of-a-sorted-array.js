// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order
// Solved by Vicente Garcia Sepulveda on 08/23/2022
var sortedSquares = function(arr) {
    var sqrArr = [];
    var sortArr = [];
    for (i=0; i<arr.length; i++){
        sqrArr.push(arr[i] * arr[i]);
    };
    return sqrArr.sort(function(a,b){return a - b});
};