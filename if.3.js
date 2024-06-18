const input = require("readline-sync")
let num1 = input.questionInt("Enter a number num1: ")
let num2 = input.questionInt("Enter a number num2: ")
let t = num1;
  num1 = num2;
  num2 = t;
  console.log(num1)
  console.log(num2)