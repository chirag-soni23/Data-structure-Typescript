"use strict";
function getCeil(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ceil = -1;
    while (l <= r) {
        let mid = Math.floor((1 + r) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] > target) {
            ceil = arr[mid];
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return ceil;
}
let ar = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90, 101];
let val = getCeil(ar, 105);
console.log(val);
