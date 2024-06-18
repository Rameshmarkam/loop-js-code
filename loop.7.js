// single digit ans sum
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let sum = 0, R;
while(N>0)
{
 R = N%10;
 sum = sum + R;
 N = Math.floor(N/10)
}
console.log(sum)