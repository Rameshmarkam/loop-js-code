/*Write a program to find the position of an element in a 2D array or Matrix.
*/
const input = require("readline-sync")
let N = input.questionInt("Enter the number of row: ")
let M = input.questionInt("Enter the number of col: ")
let arr=[];
for(let i=0; i<N; i++)
{
 arr[i] = [];
  for(let j=0;j<N; j++)
  {
     arr[i][j] = input.questionInt('Enter the number of b: ')
  }
}
let K = input.questionInt("Enter the position of K: ");
let p=0;
for(let i=0;i<N; i++)
{
    for(let j=0;j<N;j++)
    {
        if(arr[i][j]==K)
        {
         p =[i,j];
        }
    }
}
console.log(p)
