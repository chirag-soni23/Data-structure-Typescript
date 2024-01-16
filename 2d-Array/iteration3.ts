let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function iteration3(arr: number[][]) {
  let s: string = "";
  for (let j = 0; j < arr[0].length; j++) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(i);
      s += arr[i][j] + " ";
    }
  }
  console.log(s);
}
iteration3(arr3);
