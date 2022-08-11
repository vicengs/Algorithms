// Write code to return the largest number in the given array
// Solved by Vicente Garcia Sepulveda on 08/08/2022
var maxNum = function(arr) {
    var max = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        };
    };
    return max;
};