/*Write a program that rotates the elements of a list so that the elements at the first index move to the second elements at the second index move to the third and so on. The last element moves at the first index. (Take array and no_of_rotations from the user)
i/p = 1 2 3 4 5 
k = 2
 */
// rotattion
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let M = input.questionInt("Enter the number of M: ")
let arr = [];
for(let i=0;i<N; i++)
{
    arr[i] = input.questionInt("Enter the number of  b: ")
}
for(let i=0;i<M;i++)
{
let temp = arr[0]
 for(let j=1; j<N ; j++)
 {
    arr[j-1] = arr[j];
 }
 arr[N-1] = temp;
}   
console.log(arr)