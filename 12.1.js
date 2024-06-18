// pattaren 12(i)
const input = require("readline-sync")
let  N = input.question("Enter a number: ")
let k=""; a = 1;
for(i=1; i<=N; i++)
{
    for(j=1; j<=a; j++)
    {
        k+= "* ";
    }
    k+=("\n")
    a+= 2;
}
console.log(k)