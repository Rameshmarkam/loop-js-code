/*Write a program to take an unsorted array of size N that contains only non-negative integers, and find a contiguous subarray that adds to a given number S. In case of multiple subarrays, return the subarray which comes first on moving from left to right. Let us say the array is 3, 6, 7, 5, 10. And the value of S = 12. The output should be: 7, 5

Test Case1:
Input:
3 6 7 5 10
12
Output:
7 5

 */
const input = require('readline-sync')
let N = input.questionInt("Enter the number N: ")
let arr = []
for(let i=0;i<N;i++)
{
    arr[i] = input.questionInt("Enter the number of b; ")
}
let s = input.questionInt("Enter the number of s; ")
for(let i=0;i<N; i++)
{
    let j = i+1;
    if((arr[i]+arr[j])==s)
    {
        console.log(arr[i],arr[j])
    }
}