"use strict";
let aarr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// console.log(aarr.length);
// console.log(aarr[1][2]);
function iteration1(arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i].length);
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
iteration1(aarr);
