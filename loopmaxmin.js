// max min find 
const input = require("readline-sync")
let N = input.questionInt('Enter the number of N : ')
let max= input.questionInt('Enter the number of max : ')
let min = max;
let i = 2;
for(let i=2;i<=N;i++)
{
    let b = input.questionInt('Enter the number of b : ')
    if(max>b)
    {
        max=max;
    }
    else{
        max= b;
    }
    if(min>b)
    {
        min= b;
    }
    else{
        min= min;
    }
}
console.log(max,min)