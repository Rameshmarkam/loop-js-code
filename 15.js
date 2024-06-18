// // Write a program to print all Armstrong numbers in a given range of M to N.
// const input = require("readline-sync")
// let M = input.questionInt("Enter the number of M: ")
// let N = input.questionInt("Enter the number of N: ")
// let sum, num,r;
// for(i=M;i<=N;i++)
// {    
//  while(M>0)
//  {
//     r = M%10;
//     num = Math.floor(M/10);
//     sum =sum + r * r * r ;
//  }
// if(sum==M)
//  {
//     console.log(sum)
//  }
// }

const input = require("readline-sync")
let M = input.questionInt("Enter value of M: ")
let N = input.questionInt("Enter value of N: ")
for(i=M; i<=N; i++)
{
  let temp = i;
  let sum = 0;
  let Digits = i.toString().length       // tostring convert number into string
  while(temp>0) 
  {
   var digit = temp % 10;
   temp = Math.floor(temp/10);
   sum += digit ** Digits;
  }
  if(sum==i)
  {
   console.log(i)
  }
}

