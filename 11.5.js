// pattren que no 5 
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let k=""; 
for(i=0;i<=N; i++)
{
    for(j=0; j<1; j++)
    {
        s =2*i;
        k+=s;
        k+=" ";
    }
    for(a=1;a<=i; a++)
    {
      b = 2*s;
      k+=b; 
      k+=" "; 
    }
    k+="\n"
}
console.log(k)
