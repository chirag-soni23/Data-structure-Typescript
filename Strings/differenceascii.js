"use strict";
let str = 'abBcCeE';
function strDiff2char(s) {
    let ans = "";
    for (let i = 0; i < s.length - 1; i++) {
        ans += s[i];
        let ascii = s.charCodeAt(i);
        let ascii1 = s.charCodeAt(i + 1);
        ans += (ascii - ascii1);
    }
    ans += s[s.length - 1]; // last character
    return ans;
}
console.log(strDiff2char(str));
