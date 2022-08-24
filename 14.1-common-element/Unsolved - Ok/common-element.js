// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method
// Solved by Vicente Garcia Sepulveda on 08/23/22
var commonElement = function(arrA, arrB) {
    var arrLoop = arrA;
    var arrCompare = arrB;
    if (arrB.length > arrB.length){
        arrLoop = arrB;
        arrCompare = arrA;
    };
    for (i=0; i<arrLoop.length; i++){
        for (j=0; j<arrCompare.length; j++){
            if (arrLoop[i] === arrCompare[j]){
                return arrLoop[i];
            };
        };
    };
    return null;
};