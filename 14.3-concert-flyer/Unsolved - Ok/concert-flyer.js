// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty
// Solved by Vicente Garcia Sepulveda on 08/23/2022
var concertFlyer = function (magazine, flyer) {
    let flyerArray = flyer.split(" ");
    let magazineArray = magazine.split(" ");
    var compareArray = [];
    for (i=0; i<flyerArray.length; i++){
        for (j=0; j<magazineArray.length; j++){
            if(flyerArray[i]===magazineArray[j]){
                compareArray.push(magazineArray[j]);
            };
        };
    };
    if (flyerArray.length === compareArray.length){
        return true;
    };
    return false;
};