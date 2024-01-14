function subArrays(arr: any[]):void {
  for (let sp = 0; sp < arr.length; sp++) {
    //console.log(sp)
    for (let ep = sp; ep < arr.length; ep++) {
    // console.log(ep)
      let res:any[] = [];
      for (let i = sp; i <= ep; i++) res.push(arr[i]);
      console.log(res);
    }
  }
}
subArrays([5, 1, 2, 6, 2, 8]);
