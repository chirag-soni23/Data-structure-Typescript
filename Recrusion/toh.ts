// toh => Tower of hanoi
function toh(s:string,d:string,h:string,n:number){
    if(n==0)return;
    toh(s,h,d,n-1)
    console.log(`Move disc ${n} from ${s} to ${d}`)
    toh(h,d,s,n-1)

}
toh("a","b","c",3)
