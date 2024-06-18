// // array question try to solve revese number print
// const input = require("readline-sync")
// let N = input.questionInt("Enter the number of N: ")
// let Array = [N]
// let idx = 0;
// while(idx<N)
// {
//     Array[idx] = input.questionInt("Enter the number: ")
//     idx += 1
// }
// for(idx=N-1; idx>=0; idx--)
// {
//  console.log(Array[idx])
// }

const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let arr = [N]
for(i=0;i<N; i++)
{
  arr[i] = input.questionInt("Enter a number of N: ") 
}
  let M = input.questionInt("Enter the deletion number of idx M; ")
 for(i=0;i<N; i++)
 {
    arr[i]==arr[i+1]
    console.log(arr[i])
 }