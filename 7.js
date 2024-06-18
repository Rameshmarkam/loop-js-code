// perfect number
const input = require("readline-sync")
let N = input.question("Enter a number: ")
let i = 1;
let S = 0;
while(i!=N)
 { 
   if(N%i==0)
   {
    S = S+i;
   }
   else{}
    i = i+1;
 }
  if(S==N)
   {
     console.log("perfect number")
   }
   else
   {
    console.log(" not perfect number")
   }