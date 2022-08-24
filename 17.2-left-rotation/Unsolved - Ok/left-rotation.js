// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function
// Solved by Vicente Garcia Sepulveda on 08/24/2022
const leftRotation = (arr, positions) => {
    for (i=0; i<positions; i++){
        arr.push(arr.splice(0,1)[0]);
        //arr.push(arr.shift());
    };
};