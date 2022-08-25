// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock
// Solved by Vicente Garcia Sepulveda on 08/24/2022
var maxProfit = function(prices) {
    var laterArray = [];
    var profitArray = [];
    var maxPrice = 0;
    var profit = 0;
    for (i=0; i<prices.length; i++){
        laterArray = prices.slice(i+1);
        maxPrice = Math.max(...laterArray);
        profit = maxPrice - prices[i];
        if (profit < 0){
            profit = 0;
        };
        profitArray.push(profit);
    };
    return Math.max(...profitArray);
};