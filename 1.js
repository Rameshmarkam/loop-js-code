// palinndrome number
const input = require("readline-sync")
let N = input.question("Enter a number: ")
let p = N;
let rev = 0;
while(N!=0){
    R = N%10;
    N = Math.floor(N/10)
    rev = rev*10 + R;
  }
  if(rev==p){
    console.log("YES")
  }else{
    console.log("NO")
  }