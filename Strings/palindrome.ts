function palindrome(str: string): boolean {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] != str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
// let res = palindrome("racecar");
// console.log(res);

function palindromesubString(substr:string){
    for(let i = 0;i<substr.length;i++){
        for(let j = i;j<substr.length;j++){
            // We have to print the substring from i to j
            let substrs  =  substr.substring(i,j+1)
        if(palindrome(substrs)==true){
            console.log(substrs)
        }
            
        }
    }
}
let s = "racecar"
palindromesubString(s)


