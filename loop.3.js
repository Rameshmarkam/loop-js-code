// sum of the odd number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let sum = 0;
for(i=1; i<=N; i++)
{
  if(i % 2 != 0)
  {
    sum = sum + i ;
  }
}
console.log(sum)