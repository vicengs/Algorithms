// Solved by Vicente Garcia Sepulveda on 08/10/2022
const multiplyInto20 = function(arr) {
    // TODO: Write Your Code Here
    for (i=0; i<arr.length; i++){
        for (j=arr.length; j>i; j--){
            if(arr[i]*arr[j] === 20){
                return true;
            };
        };
    };
    return false;
};