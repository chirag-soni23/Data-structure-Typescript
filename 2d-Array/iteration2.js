"use strict";
let arr2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 30, 50, 60],
];
function iteration2(arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
iteration2(arr2);
