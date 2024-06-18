// find HCF of N number
const input = require("readline-sync")
let N = input.questionInt("Enter number of N: ")
let A = input.questionInt("Enter number of A: ")
let HCF = A,t,
L,
S;
for(i=2;i<=N;i++)
{
 let B = input.questionInt("Enter number of B: ")
 if(HCF>B)
 {
  L = HCF;
  S = B;
 }else
 {
  L = B;
  S = HCF;
 }
 
 while(L=L%S)
 {
  t = L
  L = S
  S = t
 }
 HCF =t

}
console.log(t)