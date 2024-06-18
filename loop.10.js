// perfect number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N; ")
let sum = 0;
for(i=1;i<=N/2; i++)
{
   if(N%i==0)
   {
      sum = sum+i;
   }
}
if(sum==N)
{
   console.log("perfect")
}
else{
   console.log("Not perfect")
}
