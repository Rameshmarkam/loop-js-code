const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let k=""
let i=2;
while(N!=1)
{
    if(N%i==0)
    {
        N =N/i;
        k+= i
        k+="\n"
    }
    else{
        i++
    }
}
console.log(k)
