// maximum and minimum number find
const input = require("readline-sync")
let N = input.questionInt("Enter number: ")
let max = input.questionInt("enter first number: ")
let min = max;
let i = 2;
while(i<=N)
 {
    let B = input.questionInt("Enter new number: ")
    if(max>B)
    {
       max = max; 
    }
    else
    {
     max = B;
    }
    if(min<B)
    {
      min = min;
    }
    else
    {
      min = B;
    }
    i = i+1;
   }
   console.log(max,min)