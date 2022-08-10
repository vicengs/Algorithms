// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var arraySearch2D = function(arr) {
    var count = 0;
    for (i=0; i<arr.length; i++){
        for (j=0; j<arr[i].length; j++){
            if (arr[i][j] === "X"){
                count++;
            }
        };
    };
    return count;
};