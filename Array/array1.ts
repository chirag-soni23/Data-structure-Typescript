function getmax(arr: number[]): number {
  let maxi = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxi) maxi = arr[i];
  }
  return maxi;
}
let arr = [5, 4, 2, 1, 6, 7];
// let result = getmax([1,2,5,6,7,8,9])
// console.log(result)
function printBarChart(arr: number[]): void {
  let cols = arr.length;
  let rows = getmax(arr);
  while (rows > 0) {
    let s = "";
    for (let j = 0; j < cols; j++) {
      if (arr[j] >= rows) s += "*";
      else s += " ";
    }
    console.log(s);
    // console.log(rows--)
    rows--;
  }
}
printBarChart(arr);
