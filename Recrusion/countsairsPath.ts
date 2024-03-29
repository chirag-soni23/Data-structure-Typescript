function countStairspath(n: number, currStair: number): number {
  // Base Case
  if (currStair == n) return 1;
  if (currStair > n) return 0;
  // recrusive function
  let one = countStairspath(n, currStair + 1);
  let two = countStairspath(n, currStair + 2);
  let three = countStairspath(n, currStair + 3);
  return one + two + three;
}
console.log(countStairspath(3, 0));
