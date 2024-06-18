/*Write a program, take two sorted arrays from the user as input and find the Union and Intersection of the arrays.

Test Case1:
Input:
1 3 4 5 7
2 3 5 6
Output:
[1, 2, 3, 4, 5, 6, 7]
[3, 5]
 */
// union and intersection of array
const input = require("readline-sync")
let A = input.questionInt("Enter the number of A: ")
let B = input.questionInt("Enter the number of B: ")
let arr1 = [];
let arr2 = [];
let sum = [];
let r = "" ;
for(let i=0; i<A; i++)
{
    arr1[i] = input.questionInt("Enter the number of b "+(i+1)+": ")
}
  for(let j=0; j<B; j++)
{
    arr2[j] = input.questionInt("Enter the number of c "+(j+1)+ ": ")
}
 let S = A+B;
 let i=0, j=0;
for(let k=0; k<S; k++)
{
   if(i<A)
   {
    if(j<B)
    {
        if(arr1[i]<arr2[j])
        {
            sum[k] = arr1[i]
            i++;
        }
       else if(arr1[i]>arr2[j])
          {
            sum[k] =arr2[j]
            j++;
          }
          else 
          {
           if(arr1[i]==arr2[j])
           {
            r+= arr1[i];
            r+= "  ";
            sum[k] = arr1[i];
           i++;
           j++;
          }
    }  }
    else
    {
     sum[k] =arr1[i]
     i++;
    }
  }
  else
  {
    //sum[k]=arr2[j];
    //j++;
  }
}
console.log(sum)
console.log(r)
