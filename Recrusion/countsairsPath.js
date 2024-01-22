"use strict";
function countStairspath(n, currStair) {
    // Base Case
    if (currStair == n)
        return 1;
    if (currStair > n)
        return 0;
    // recrusve function
    let one = countStairspath(n, currStair + 1);
    let two = countStairspath(n, currStair + 2);
    let three = countStairspath(n, currStair + 3);
    return one + two + three;
}
console.log(countStairspath(3, 0));
