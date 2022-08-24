// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique
// Solved by Vicente Garcia Sepulveda on 08/24/2022
const minIncrement = function(nums) {
    var sortNums = nums.sort(function(a,b){return a - b});
    var previousNum = sortNums[0];
    var currentNumber = sortNums[1];
    var numIncrements = 0;
    for (i=1; i<sortNums.length; i++){
        while (currentNumber <= previousNum){
            currentNumber++;
            numIncrements++;
        };
        previousNum = currentNumber;
        currentNumber = sortNums[i+1];
    };
    return numIncrements;
};