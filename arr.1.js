const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let a=[]
for(i =0; i<N; i++)
{
    let b = input.questionInt("Enter the number "+(i+1)+ ": ")
    a[i] = b;
}
i = 0;
while (i < N)
{
    console.log(a[i]);
    i++;
}