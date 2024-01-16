let arr5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function iteration4(arr: number[][]) {
  let s: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      // even row left to right
      for (let j = 0; j < arr.length; j++) {
        s += arr[i][j] + " ";
      }
    } else {
      // odd row right to left
      for (let j = arr[i].length - 1; j >= 0; j--) {
        s += arr[i][j] + " ";
      }
    }
  }
  console.log(s);
}
iteration4(arr5);
