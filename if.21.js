// find max number in 4 input
const input = require("readline-sync")
let N1 = input.questionInt("Enter the number of N1: ")
let N2 = input.questionInt("Enter the number of N2: ")
let N3 = input.questionInt("Enter the number of N3: ")
let N4 = input.questionInt("Enter the number of N4: ")
let L,L1, max,min;
let S,S1, max1,min1;
if(N1>N2)
{
 L = N1;
 S = N2;
}
else{
    L = N2;
    S = N1;
}
if(N3>N4)
{
    L1 = N3;
    S1 = N4;
}
else{
    L1 = N4;
    S1 = N3;
}
if(L>L1)
{
max = L;
min = L1;
}
else{
    max = L1;
    min = L;
}
if(S>S1)
{
    max1 = S;
    min1 = S1;
}
else{
    max1 = S1;
    min1 = S;
}
if(max1>min)
{
    console.log(min)
}
else{
    console.log(max1)
}