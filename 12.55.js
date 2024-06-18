//12(5)
const input = require("readline-sync");
let N = input.questionInt(" Enter a number: ");
let s=""; a=N*2-1;
for(i=N;i>=1; i--)
{
    for(j=N-1;j>=i; j--)
    {
        s+="  "
    }
    for(k=1;k<=a; k++)
    {
        s+= "0 "
    }
    s+="\n"
    a=a-2;
}
for(i=1; i<=N-1;i++)
{ 
    for(j=N-2;j>=i;j--)
    {
        s+= "  ";
    }
    
    for(k=1;k<=a+4; k++)
    {
        s+= "0 ";
    }
    s+="\n"
    a=a+2;
}
console.log(s)