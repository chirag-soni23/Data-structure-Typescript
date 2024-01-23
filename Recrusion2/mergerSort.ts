function merge2SortedArrays(arr1: number[], arr2: number[]) :number[]{
    let n = arr1.length;
    let m = arr2.length;
    let ans: number[] = [];
    let i = 0;
    let j = 0;
  //   Compare Both i and j
    while (i < n && j < m) {
      // Compare arr1[i] with arr[j], the smaller  one will be added to ans.
      if (arr1[i] < arr2[j]) {
        ans.push(arr1[i]);
        i++;
      } else {
        ans.push(arr2[j]);
        j++;
      }
    }
  //   if i exceed arr1, and all the people arr2
  while(j<m){
      ans.push(arr2[j])
      j++
  }
  //   if j exceed arr2, and all the people arr1
  while(i<n){
      ans.push(arr1[i])
      i++
  }
  return ans
  
  }
  
   function  mergeSort(arr:number[],l:number,r:number){
    // if only 1 element is in the range,
    // single element is always sorted
    if(l==r){
        let res = []
        res.push(arr[l])
        return res;
    }
    let mid = Math.floor((l+r)/2)
    let leftSortedarr = mergeSort(arr,l,mid)
    let rightSortedarr = mergeSort(arr,mid+1,r)
    let fullSortedarr =  merge2SortedArrays(leftSortedarr,rightSortedarr)
    return fullSortedarr;
   }
    function sort(arr:number[]){
        // return a sorted array
        return mergeSort(arr,0,arr.length-1)        
    }
   
  
let arrays =  [26,44,108,123,54,7,3,23,8643,12,43]
let sorted = sort(arrays)
console.log(sorted)


  
  