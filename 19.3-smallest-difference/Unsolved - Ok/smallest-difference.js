// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference
// Solved by Vicente Garcia Sepulveda on 08/25/2022
var smallestDifference = function(arr1, arr2) {
    var diff = Infinity;
    var smallestDiff = diff;
    for (i=0; i<arr1.length; i++){
        for (j=0; j<arr2.length; j++){
            diff = Math.abs(arr1[i] - arr2[j]);
            if (diff < smallestDiff){
                var minArray = [];
                minArray.push(arr1[i]);
                minArray.push(arr2[j]);
                smallestDiff = diff;
            };
        };
    };
    return minArray;
};