// find qoutiant and remainder
const input = require("readline-sync")
let N1 = input.questionInt("Enter the value of N1: ")
let N2 = input.questionInt("Enter the value of N2: ")
let qout, rem;
   qout = Math.floor(N1/N2);
   rem = N1%N2;
   console.log(qout)
   console.log(rem)
