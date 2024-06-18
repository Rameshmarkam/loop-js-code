// reverse pattren que
const input = require("readline-sync")
let N = input.question("Enter a number: ")
let  i=N;
let K = "";
for(M=1; M<=N; M++)
{
 for(j=1; j<=i; j++)
  {
    K+="* ";
  } 
 K+= ("\n") 
  i--; 
}
console.log(K);