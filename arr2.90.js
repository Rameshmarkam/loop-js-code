// 90 degree rotete matrix 
const input = require("readline-sync")
let N = input.questionInt("Enter the number of row: ")
let M = input.questionInt("Enter the number of col: ")
let arr=[], arr1=[];
for(let i=0; i<N; i++)
{
 arr[i] = [];
  for(let j=0;j<N; j++)
  {
     arr[i][j] = input.questionInt('Enter the number of b: ')
  }
}
for(let i=0; i<N;i++)
{
    for(let j=0;j<M; j++)
    {
        arr[j][(N-1)-i] = arr1[i][j];
    }
}
console.log(arr)