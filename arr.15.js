/*Write a program to take an array of size N and a number K from the user as input, and print the elements of an array in a rotated manner with a gap of K. Eg, let us say the array is  3, 6, 7, 5, 10. And the value of k = 3. The output should be - 7, 3, 10, 6, 5. If k = 2, the output should be  6, 5, 3, 10, 7
	
	Test Case1:Enter the value of b: 33
Input:
3 6 7 5 10
3
Output:
7 3 10 6 5

Test Case2:
Input:
3 6 7 5 10
2
Output:
6 5 3 10 7
 */
 const input = require("readline-sync")
 let N = input.questionInt("Enter the number of N: ")
 let arr = [];
 for(let i=0; i<N; i++)
 {
    arr[i] = input.questionInt("Enter the value of b: ")
 }
 let K = input.questionInt("Enter the value of K: ")
 let i =0;
 for(let i=0; N>1;N--)
 {
  let r = i + K -1;
  while(r>= N)
  {
    r = r - N;
  }
  console.log(arr[r]);
  i = r;
  while(r<N-1)
  {
    arr[r] = arr[r +1]
    r++;
  }

 }
 console.log(arr[0]);