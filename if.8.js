// swap the number without using tempry variable
const input = require("readline-sync")
let N1 = input.questionInt("Enter the value of N1: ")
let N2 = input.questionInt("Enter the value of N2: ")
 N1 = N1+N2;
 N2 = N1 - N2;
 N1 = N1 - N2;
 console.log(N1)
 console.log(N2)