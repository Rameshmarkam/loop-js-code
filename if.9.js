// find largest number
const input = require("readline-sync")
let N1 = input.questionInt("Enter the value of N1: ")
let N2 = input.questionInt("Enter the value of N2: ")
 let I, E;
 I = Math.floor(N1/N2);
 E = I*N2;
 console.log(E)