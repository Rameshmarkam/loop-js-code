// find odd even number
const input = require("readline-sync")
let N1 = input.question("Enter the value of N1: ")
let num;
if(N1%2==0)
{
    console.log(" number is: Even")
}
else{
    console.log("Number is: Odd ")
}