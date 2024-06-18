// find second max number in 3 input
const input = require("readline-sync")
let N1 = input.questionInt("Enter the number of N1: ")
let N2 = input.questionInt("Enter the number of N2: ")
let N3 = input.questionInt("Enter the number of N3: ")
let max, max1, sec;
let min, min1, sec1;
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
    sec = N3;
}
else{
    sec = max;
}
if(sec>min)
{
    console.log(sec)
}
else{
    console.log(min)
}