function reverseArr(arr:number[]){
   let l = 0;
   let r = arr.length - 1
   while(l<r){
    // swap arr[l] <-> arr[r]
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    l++;
    r--;
   }  
}
let Arr = [1,2,3,4,5,6]
reverseArr(Arr)
console.log(Arr)