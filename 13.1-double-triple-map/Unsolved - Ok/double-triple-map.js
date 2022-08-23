// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var doubleTripleMap = function(arr) {
    var newArr = [];
    for (i=0; i<arr.length; i++){
        if (arr[i]%2 === 0){
            newArr.push(arr[i]*2);
        }else{
            newArr.push(arr[i]*3);
        };
    };
    return newArr;
};