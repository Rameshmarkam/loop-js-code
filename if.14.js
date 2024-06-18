// take a three number and find largest number
const input = require("readline-sync")
let N1 = input.questionInt("Enter the value of N1: ")
let N2 = input.questionInt("Enter the value of N2: ")
let N3 = input.questionInt("Enter the value of N3: ")
let max;
let min;
if(N1>N2)
{
 max = N1;
 min = N2;
} 
else{
    max = N2;
    min = N1;
}
if(max>N3)
{
 console.log(max)
}
else{
    console.log(N3)
}