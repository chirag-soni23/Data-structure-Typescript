let arr4 = [
  [1, 2, 3],
  [4, 5, 6],   // => 90 degree rotate
  [7, 8, 9],
];
function reversearr(arr:number[]){
    let l = 0
    let r = arr.length -1
    while(l<r){
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++;
        r--
    }
    for(let i = 0;i<arr.length;i++){
        reversearr(arr4[i])
    }
}

function rotatearr(arr:number[][]){
    for(let i = 0;i<arr.length;i++){
        // console.log(i)
        for(let j =i ;j<arr[0].length;j++){
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }

    }
console.log(arr)
}
rotatearr(arr4)
