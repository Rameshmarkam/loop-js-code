// try array code sum of odd and even number
const input = require('readline-sync')
let N = input.questionInt("Enter the number of N: ")
let A =[];
for(let i=0;i<N;i++)
{
    A[i]= input.questionInt("Enter number of N: ")
}
let sum=0, sum1=0;
for(let i=0;i<N;i++)
{
    if(A[i]%2==0)
    {
        sum = sum + A[i];
    }
    else
    {
      sum1 = sum1 + A[i];
    }
}
console.log(sum, sum1)

