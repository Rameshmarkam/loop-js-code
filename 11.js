// pattren que 1
const input = require("readline-sync")
let  N = input.question("Enter a number: ")

let k="";
for(i = 1; i<=N;  i++)
{
    for(j = 1; j<=i; j++)
    {
        k+="* ";
    }
        k+=("\n")
    
}

console.log(k);


