"use strict";
function palindrome(str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (str[l] != str[r]) {
            return false;
        }
        l++;
        r--;
        return true;
    }
}
let res = palindrome("racecars");
console.log(res);
