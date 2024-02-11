"use strict";
function fibonacci(n) {
    // Base Case
    if (n == 1)
        return 0;
    if (n == 2)
        return 1;
    // Not Base Case
    // to calculate nth fibonacci number i need n-1th and n-2th fibonacci number
    let nm1 = fibonacci(n - 1);
    let nm2 = fibonacci(n - 2);
    // I have both ingredients for my dish 
    // dish = nth fibonacci number
    return nm1 + nm2;
}
console.log(fibonacci(8));
