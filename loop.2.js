// print even number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
for(i=1; i<N; i++)
{
    if(i % 2 ==0)
    {
      console.log(i)
    }
}