function stairs(n: number, currStair: number, asf: string) {
  if (currStair == n) {
    console.log(asf);
    return;
  }
  if (currStair > n) return;
  // 1 stairs jump
  stairs(n, currStair + 1, asf + "1");
  // 2 stairs jump
  stairs(n, currStair + 2, asf + "2");
  // 3 stairs jump
  stairs(n, currStair + 3, asf + "3");
}
stairs(3, 0, "");

