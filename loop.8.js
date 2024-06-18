// reverse number print
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let sum = 0, R;
while(N>0)
{
  R = N%10;
  sum = sum * 10 + R ;
  N = Math.floor(N/10)
}
console.log(sum)