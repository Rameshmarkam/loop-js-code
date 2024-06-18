// sum of the range
const input = require("readline-sync")
let M = input.questionInt("Enter the number of M; ")
let N = input.questionInt("Enter the number of N: ")
let sum = 0;
for(i=M; i<=N; i++)
{
    sum = sum + i;
}
console.log(sum)