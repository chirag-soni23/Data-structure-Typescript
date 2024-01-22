// psf => path so far
function robotPath(n: number, m: number, i: number, j: number, psf: string) {
  if (i == n && j == n) {
    console.log(psf);
    return;
  }
  if (i > n || j > n) return;
  // Vertically
  robotPath(n, m, i + 1, j, psf + "v");
  // Horizontally
  robotPath(n, m, i, j + 1, psf + "h");
}
robotPath(3, 3, 1, 1, "");
