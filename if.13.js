//panding
const input = require("readline-sync")
let N = input.questionInt("Enter the value of N: ")
let a = N;
while(a%2!=0)
{
    a = a * 2;
}
console.log(a)
