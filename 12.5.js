// pattren que 12(5)

const input = require("readline-sync");
let N = input.questionInt(" Enter a number: ");
let s=""; a=1;

for(i=1; i<=N;i++)
{ 
    for(j=N-1;j>=i;j--)
    {
        s+= "  ";
    }
    
    for(k=1;k<=a; k++)
    {
        s+= "* ";
    }
    s+="\n"
    a=a+2;
}

for(i=N;i>=1; i--)
{
    for(j=N-1;j>=i; j--)
    {
        s+="  "
    }
    for(k=1;k<=a-2; k++)
    {
        s+= "* "
    }
    s+="\n"
    a=a-2;
}
console.log(s)