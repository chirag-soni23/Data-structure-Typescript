"use strict";
function firstOccur(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let pot = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2); // Fix: use (l + r) instead of (1 + r)
        if (arr[mid] == target) {
            pot = mid;
            r = mid - 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return pot;
}
let arrr = [2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 7, 7, 7, 7];
console.log(firstOccur(arrr, 4));
