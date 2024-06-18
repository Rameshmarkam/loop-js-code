// sum of series que
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let sum = 0;
for(i=1;i<=N; i++)
{
    sum = sum + 1 / i ;
}
console.log(sum)
