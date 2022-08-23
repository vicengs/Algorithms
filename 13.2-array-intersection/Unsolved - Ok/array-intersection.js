// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays
// Solved by Vicente Garcia Sepulveda on 08/11/2022
var arrayIntersection = function(arr1, arr2) {
    var lenght = arr1.length;
    var pair = 0;
    var newArray = [];
    for (i=0; i<lenght; i++){
        for (j=0; j<arr2.length; j++){
            if (arr1[i] === arr2[j]){
                pair = arr2.splice(j,1);
                newArray.push(pair[0]);
                break;
            };
        };
    };
    return newArray;
};