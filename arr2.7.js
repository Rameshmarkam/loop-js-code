/*Write a program to find the sum of all diagonal elements of a matrix. */
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
let r=0, c=N-1, sum = 0;
for(let i=0;i<N; i++)
{
    if(r==c)     // (i==j|| i+j==2)
    {
        sum = sum+ arr[i][r];
        r++;
        c--;
    }
    else{
        sum = sum+ arr[i][r]+arr[i][c];
        r++;
        c--;
    }
}
console.log(sum)