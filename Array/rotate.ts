function reverseInrange(nums:number[],l:number,r:number){
    while(l<r){
        // swap nums[l] <-> nums[r]
        let temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++;
        r--;
       }  
}


var rotate = function (nums:number[],k:number){
    let n = nums.length;
    k = k% n
    reverseInrange(nums,n-k,n-1)
    reverseInrange(nums,0,n-k-1)
    reverseInrange(nums,0,n-1)

}

let nums = [1,2,3,4,5,6]
reverseInrange(nums,2,5)
console.log(nums)