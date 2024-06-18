// // series(1)
// const input = require("readline-sync")
// let N = input.questionInt("Enter value N: ")
// let X = input.questionInt("Enter value X: ")
// let i = 1, sum = 0;
// while(i<=N)
//  {
//    sum = sum + X**i /i ;
//    i++;
//  } 
//   console.log(sum)

// series(1)
const input = require("readline-sync")
let N = input.questionInt("Enter value N: ")
let X = input.questionInt("Enter value X: ")
let i = 0, sum = 0;
while(i<N)
 {
   sum = sum + X**(i+1)/(i+1);
   i++;
 } 
  console.log(sum)