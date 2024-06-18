// find max in four number
const input = require("readline-sync")
let N1 = input.questionInt("Enter the value of N1: ")
let N2 = input.questionInt("Enter the value of N2: ")
let N3 = input.questionInt("Enter the value of N3: ")
let N4 = input.questionInt("Enter the value of N4: ")
let max, min, max1, min1;
if(N1>N2)
{
    max = N1;
    min = N2;
}
else{
    max = N2;
    min = N1;
}
if(N3>N4)
{
    max1 = N3;
    min1 = N4;
}
else{
    max1 = N4;
    min2 = N3;
}
if(max>max1)
{
    console.log(max)
}
else{
    console.log(max1)
}