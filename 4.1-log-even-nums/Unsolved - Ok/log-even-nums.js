// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number
// Solved by Vicente Garcia Sepulveda on 08/08/2022
var logEvenNums = function(num) {
    for (i=0; i<=num; i++){
        if (i%2 === 0){
            console.log(i);
        };
    };
};