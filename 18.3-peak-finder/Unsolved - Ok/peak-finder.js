// Solved by Vicente Garcia Sepulveda on 08/24/2022
const peakFinder = function(nums) {
    // TODO: Write a function that takes an array of integers containing exactly one peak.
    // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
    nums.sort(function(a,b){return a - b});
    return nums[nums.length-1];
};