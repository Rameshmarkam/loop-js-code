/*
Write a program to transpose matrix A. Store the result in a separate matrix.
 */
// 2D array
const input = require("readline-sync")
let N = input.questionInt("Enter the num of row: ")
let M = input.questionInt("Enter the num of col: ")
let i,j,k, arr1=[], arr2=[]; 
for(let i=0;i<N; i++)
{
    arr1[i] = [];
    for(let j=0;j<M;j++)
    {
        arr1[i][j] = input.questionInt(`Enter num ${i+1}-${j+1}  : `);
    }
} 
 for(let i=0;i<N;i++)
 {
    arr2[i]=[];
    for(let j=0;j<M;j++)
    {
    arr2[i][j] = arr1[j][i];
    }

 }
 console.log(...arr2)