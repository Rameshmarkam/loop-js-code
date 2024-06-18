/*Write a program to subtract two matrices and store them in a separate matrix. */
const input = require('readline-sync');
 let n = input.questionInt("Enter row n  : ");
 let m = input.questionInt("Enter column m : ");
 let i,j,k,arr=[],arr1=[],arr3=[];
 for (i = 0; i < n; i++)
 {
    arr[i] = [];
    for (j = 0; j < n; j++)
    {
    arr[i][j] = input.questionInt(`Enter num ${i+1}-${j+1}  : `);
    }
}
// console.log(arr);
for (i = 0; i < n; i++)
 {
    arr1[i] = [];
    for (j = 0; j <n; j++)
    {
    arr1[i][j] = input.questionInt(`Enter num ${i+1}-${j+1} : ` );
    }
}
// console.log(arr1);
for (i = 0; i < n; i++)
 {
    arr3[i] = [];
    for (j = 0; j <n; j++)
    {
    arr3[i][j] = arr[i][j] - arr1[i][j];
    }
}
for (k = 0;  k< n; k++)
 {
    console.log(arr3[k]);
 }
 