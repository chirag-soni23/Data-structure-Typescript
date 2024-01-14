function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
let array = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90, 101];
let idx = linearSearch(array, 90);
console.log(idx);
