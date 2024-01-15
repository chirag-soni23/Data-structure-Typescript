"use strict";
function reverseArr(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        // swap arr[l] <-> arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
let Arr = [1, 2, 3, 4, 5, 6];
reverseArr(Arr);
console.log(Arr);
// Reverse in range  =>
function reverseRange(arr, l, r) {
    while (l < r) {
        // swap arr[l] <-> arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
let Arrr = [1, 2, 3, 4, 5, 6];
reverseRange(Arrr, 2, 5);
console.log(Arrr);
