// opratores
const input = require("readline-sync")
let A = input.questionInt(" Enter the number of A: ")
let B = input.questionInt(" Enter the number of B: ")
let sum,sub,mul,div, mod,fdiv;
sum = A+B;
sub = A-B;
mul = A*B;
div = A/B;
mod = A%B;
fdiv = Math.floor(A/B)
console.log(sum,sub,mul,div, mod,fdiv)