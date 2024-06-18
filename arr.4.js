// sum of even and odd number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let a = []
let sum = sum1= 0;
for(i=0;i<N; i++)
{
    let b = input.questionInt("Enter the number "+(i+1)+ ": ") 
    a[i] = b;  
}
for(let i=0;i<N; i++)
{
  if(a[i]%2==0)
  {
    sum = sum+a[i]
  }
  else{
    sum1 = sum1+a[i]
  }
}
console.log(sum,sum1)