// Write code to merge two sorted arrays into a new sorted array
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var mergeSorted = function (arr1, arr2) {
    var sortedArray = [];
    var min = [];
    var concatArray = arr1.concat(arr2);
    var length = concatArray.length;
    for (i=0;i<length;i++){
        min = concatArray.splice(concatArray.indexOf(Math.min(...concatArray)),1);
        sortedArray.push(min[0]);
    };
    return sortedArray;
};