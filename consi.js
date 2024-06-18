const input = require("readline-sync")
let N = input.questionInt("Enter the number of N : ")
let arr =[]
for(let i=0;i<N;i++)
{
    arr[i] = input.questionInt("Enter the numbers : ")
}
for(let i=0;i<N; i++)
{
  let j= i+1;
    if((arr[j]-arr[i])==1)
    {
        console.log("YES")
    }
    else{
        console.log("NO")
    }
}