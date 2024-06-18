// pattren que no 6
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let k="";
for(i=1; i<=N; i++)
{
   {
     for(j=1;j<=i; j++)
     {
      
      k+=j;
      k+= " ";
      }
        for(j=j-2;j>=1;j--)
        {
          k+= j;
          k+= " ";
        }
    }
    k+="\n"

}
console.log(k)