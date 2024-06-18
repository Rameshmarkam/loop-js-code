// input number print
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let a=[]
let i =0;
while(i<N)
{
    let b = input.questionInt("Enter the number "+(i+1)+ "= ")
    a[i] = b
    i++;
}
console.log(a);