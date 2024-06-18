// All Equal, Two Equal, 
const input = require("readline-sync")
let N1 = input.questionInt('Enter the number of N1: ')
let N2 = input.questionInt('Enter the number of N2: ')
let N3 = input.questionInt('Enter the number of N3: ')
let L,S,max,min;
if(N1==N2&&N1==N3&&N2==N3)
{
    console.log("All Equal")
}
else if(N1==N2||N1==N3||N2==N3)
{
    console.log("Two equal")
}
else
{
    if(N1>N2)
   {
    L= N1;
    S= N2;
   }
else{
    L= N2;
    S= N1;
}
if(L>N3)
{
    max=L;
    min=N3;
}
else{
    max= N3;
    min= L;
}
if(max%2==0)
{
    console.log("Even")
}
else{
    console.log("Odd")
}
}

// const input=require("readline-sync")
// let y = input.questionInt("Enter the Year: ")

// if(y%4==0)
// {
//     if(y%100!==0)
//     {
//         console.log(y,"Leap year")
//     }
//     else if(y%400==0)
//      {
//     console.log(y,"Leap Year")
//     }
// else
// {
//     console.log("Not Leap Year")
// }
// }
// else
// {
//     console.log("Not Leap Year")
// }