"use strict";
// console.log(String.fromCharCode(65))
// console.log(String.fromCharCode(47))
// console.log('ca'.charCodeAt(1))
// Toogle ascii value
function toggleCase(s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);
        if (ascii < 97) {
            // I am a capital letter,convert me to small letter by adding 32
            ascii += 32;
        }
        // I am a small letter,convert me to small letter by minus 32
        else {
            ascii -= 32;
        }
        ans += String.fromCharCode(ascii);
    }
    return ans;
}
let asciiresult = toggleCase("abCdeFgh");
console.log(asciiresult);
