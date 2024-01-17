"use strict";
let arr8 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
function reverseSpiralOrder(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let total = n * m;
    let res = [];
    let tw = 0;
    let bw = n - 1;
    let lw = 0;
    let rw = m - 1;
    while (total > 0) {
        // Print top wall
        for (let j = rw; j >= lw && total > 0; j--) {
            res.push(arr[tw][j]);
            total--;
        }
        tw++;
        // Print left wall
        for (let i = tw; i <= bw && total > 0; i++) {
            res.push(arr[i][lw]);
            total--;
        }
        lw++;
        // Print bottom wall
        for (let j = lw; j <= rw && total > 0; j++) {
            res.push(arr[bw][j]);
            total--;
        }
        bw--;
        // Print right wall
        for (let i = bw; i >= tw && total > 0; i--) {
            res.push(arr[i][rw]);
            total--;
        }
        rw--;
    }
    return res;
}
let results = reverseSpiralOrder(arr8);
console.log(results);
