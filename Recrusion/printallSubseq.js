"use strict";
// asf => answer so far
function printer(arr, idx, asf) {
    if (idx == arr.length) {
        console.log(asf);
        return;
    }
    // idxth if i pick
    printer(arr, idx + 1, asf + " " + arr[idx]);
    // idxth if not idx
    printer(arr, idx + 1, asf);
}
console.log(printer([10, 20, 30], 0, ""));
