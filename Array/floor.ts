function getFloor(arr: number[], target: number): number {
    let l = 0;
    let r = arr.length - 1;
    let floor = -1;
  
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
  
      if (arr[mid] == target) {
        return target;
      } else if (arr[mid] < target) {
        floor = arr[mid];
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  
    return floor;
  }
  
  let a = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90, 101];
  let value = getFloor(a, 80);
  console.log(value);
  