// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist
// Solved by Vicente Garcia Sepulveda on 08/10/2022
var mostSongsInPlaylist = function(arr) {
    var sum = 0, max = 0;
    var length = arr.length;
    for (i=0; i<length; i++){
        sum = sum + arr[i];
    };
    while (sum > 60){
        max = Math.max(...arr);
        arr.splice(arr.indexOf(max),1);
        sum = sum - max;
        length = length - 1;
    };
    return length;
};