const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let digit =0;
while(N>0)
{
    let R = N % 10;
     digit++;
     N = Math.floor(N/10)
 
}
console.log(digit)