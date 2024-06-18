/*Write a program to find the minimum element in the matrix. */
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
let i=0,j=0;
let minimum = arr[i][j];
for(let i=0;i<N; i++)
{
    for(let j=0;j<N; j++)
    {
        if(minimum>arr[i][j])
        {
           minimum = arr[i][j];
        }
    }
}
console.log(minimum)