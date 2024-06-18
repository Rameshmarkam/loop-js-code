//pattern que no 4
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let a=1; K="";     // space line 
for(i=1; i<=N; i++)
{
 for(j=1; j<=i; j++)
 {
    K+= a;     // data aake yanh store ho jayega
    K+= " ";           // for space in number
    a+= 1;
 }
 K+="\n"  // for line change
}
console.log(K)