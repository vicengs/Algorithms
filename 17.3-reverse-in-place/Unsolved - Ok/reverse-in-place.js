// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method
// Solved by Vicente Garcia Sepulveda on 08/24/2022
const reverseInPlace = (arr) => {
    for (i=arr.length-1; i>0; i--){
        arr.push(arr.splice(i-1,1)[0]);
    };
    return arr;
};