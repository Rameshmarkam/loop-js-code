// // pattaren 12(ii)
// const input = require("readline-sync")
// let  N = input.question("Enter a number: ")
// let k=""; let a=1;
// for(i=1; i<=N; i++)
// {
    
//     for(j=1; j<=a; j++)
//     {
//         k+= "* ";
//     }
//     k+="\n"
//     a+= 2;
// }
// console.log(k)
// let A=a-2; 
// let M = A-2;
// let s="";
// for(i=1;i<=N-1;i++)
// { 
//     for(j=1;j<=M;j++)
//     {
//         s+= "* "
//     }
//     s+="\n";
//     M+= -2;
// }
// console.log(s)

// more try same que
const input = require("readline-sync")
let  N = input.question("Enter a number: ")
let k=""; let a=1;
for(i=1; i<=N; i++)
{
    
    for(j=1; j<=a; j++)
    {
        k+= "* ";
    }
    k+="\n"
    a+= 2;
}
for(i=N-1; i>=1;i--)
{
    for(j=1;j<=a-4;j++)
    {
        k+= "* ";
    }
    k+="\n"
    a = a-2;
}
console.log(k)