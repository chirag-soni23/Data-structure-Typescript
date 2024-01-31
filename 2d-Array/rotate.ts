let arr4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  function reversearr(arr:number[]) {
      let l = 0;
      let r = arr.length - 1;
      while (l < r) {
          let temp = arr[l];
          arr[l] = arr[r];
          arr[r] = temp;
          l++;
          r--;
      }
  }
  
  function rotatearr(arr:number[][]) {
      // Transpose the matrix
      for (let i = 0; i < arr.length; i++) {
          for (let j = i; j < arr[0].length; j++) {
              let temp = arr[i][j];
              arr[i][j] = arr[j][i];
              arr[j][i] = temp;
          }
      }
  
      // Reverse each row
      for (let i = 0; i < arr.length; i++) {
          reversearr(arr4[i]);
      }
  }
  
  rotatearr(arr4);
  console.log(arr4);
  