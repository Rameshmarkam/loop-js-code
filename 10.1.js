// second series
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let X = input.questionInt(" Enter a number: ")
let i = 1; sum = 0; a =1;
while(i<=N)
  {
   if(i%2!=0)
   {
    sum = sum + X**a / a ;
   }
   else
   {
    sum = sum - X**a / a ;
   }
   i++;
   a = a+2;
  }
  console.log(sum)