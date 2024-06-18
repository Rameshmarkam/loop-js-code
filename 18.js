// bijank no find
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
while(N>9)
{
    sum=0
    while(N!=0)
    {
        R =N%10
        N= Math.floor(N/10)
        sum =sum+R
    }
    N=sum
}
console.log(N)