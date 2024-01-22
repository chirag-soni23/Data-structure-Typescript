"use strict";
function mergeTwoSortedArrays(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let ans = [];
    let i = 0;
    let j = 0;
    //   Compare Both i and j
    while (i < n && j < m) {
        // Compare arr1[i] with arr[j], the smaller  one will be added to ans.
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }
        else {
            ans.push(arr2[j]);
            j++;
        }
    }
    //   if i exceed arr1, and all the people arr2
    while (j < m) {
        ans.push(arr2[j]);
        j++;
    }
    //   if j exceed arr2, and all the people arr1
    while (i < n) {
        ans.push(arr1[i]);
        i++;
    }
    return ans;
}
console.log(mergeTwoSortedArrays([5, 11, 19, 26, 32, 49, 56, 62], [1, 6, 9, 12, 99, 100]));
