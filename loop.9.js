// find prime number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let sum = 0;
for(i=1; i<=N; i++)
{
    if(N%i==0)
    {
     sum = sum +1 ;
    }
}
if(sum==2)
{
    console.log("YES")
}
else{
    console.log("NO")
}