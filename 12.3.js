// que no12(3) pattren que 
const input = require("readline-sync")
let  N = input.question("Enter a number: ")
let k=""; let a=1;
for(i=1; i<=N; i++)
{
    
    for(j=0; j<=a; j++)
    {
        k+= "*";
        
    }
  
    k+="\n"
    a+= 2;
}
for(i=N-1; i>=1;i--)
{
    for(j=0;j<=a-4;j++)
    {
        k+= "*";
      
    }
    
    k+="\n"
    a = a-2;
}
console.log(k)