// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`
// Solved Vicente Garcia Sepulveda on 08/10/2022
var isUnique = function(arr) {
    for (i=0; i<arr.length; i++){
        for (j=i+1; j<arr.length; j++){
            if (arr[i] == arr[j]){
                console.log("i = "+i+" j = "+j);
                console.log("arr[i] = "+arr[i]+" arr[j] = "+arr[j]);
                return false;
            };
        };
    };
    return true;
};