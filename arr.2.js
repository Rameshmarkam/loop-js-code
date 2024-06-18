//find reverse number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let a = []
for(k=0;k<N; k++)
{
 let b = input.questionInt("Enter the number "+(k+1)+ ": ")
  a[k] = b
}
let i=0,j=N-1, temp;
while(i<j)
{
    temp = a[i]
    a[i] = a[j]
    a[j] = temp
    i++;
    j--;
}
i = 0;
while (i < N)
{
    console.log(a[i]);
    i++;
}
