// series factorial 
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let x = input.questionInt("Enter a number: ")
let i = 1; sum = 0;
while(i<=N)
 {
  let j = 1; a = 1;
  while (j<=i)
  {
    a = a * ((-1)**(j-1) ) * j;
  
    j++;
  }
    sum = sum + (x**i) /a ;

   i+= 2;
 }
 console.log(sum);