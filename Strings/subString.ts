function subString(s:string){
    for(let i = 0;i<s.length;i++){
        for(let j = i;j<s.length;j++){
            // We have to print the substring from i to j
            console.log(s.substring(i,j+1))
            
        }
    }
}
subString("abcd")