// find HCF and LCM
const input = require("readline-sync")
let A = input.question("Enter first number: ")
let B = input.question("Enter second number: ")
let x = A;
let y = B;
while(y!=0)
  { 
    let z = y;
     y = x%y;
     x = z;
  }
  let HCF = x;
   let LCM = A*B/HCF;
   console.log(HCF,LCM)