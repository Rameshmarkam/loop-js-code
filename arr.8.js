// pattren que
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let arr = []
let s=""
for(i=0;i<N;i++)
{
    let b = input.questionInt("Enter the vale of b "+ (i+1) +" : ")
    arr[i] =b   
}
for(j=0;j<N; j++)
{
    for(k=0;k<arr[j];k++)
    {
        s+= ">"

    }
    s+= "\n"
}
console.log(s)