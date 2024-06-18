// hcf and lcm
const input = require("readline-sync")
let A = input.question("Enter first number: ")
let B = input.question("Enter second number: ")
if(A>B)
  { 
    L = A;
    S = B;
  } 
  else
   {
    L = B;
    S = A;
   } 
   let M = A;
   let N = B;
   while(M==N)
     {
        if(M>N)
        {
          M = M-N;  
        }
        else
        {
         N = N-M;  
        }
     }
     let HCF = M;
     let LCM = L*S/HCF;
     console.log(HCF,LCM)