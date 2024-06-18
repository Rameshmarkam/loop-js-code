// gretest number
const input = require("readline-sync")
let N1 = input.questionInt("Enter the value of N1: ")
let N2 = input.questionInt("Enter the value of N2: ")
if(N1>N2)
{
    console.log("largest number N1: " + N1)
}
else{
    console.log("largest number N2: " + N2)
}