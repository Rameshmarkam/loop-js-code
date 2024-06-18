/*Write a program, take two sorted arrays of size m and n from the user as input and return the median of the two sorted arrays.

*/ 
const input = require("readline-sync")
let N1 = input.questionInt("Enter the number of N1: ")
let N2 = input.questionInt("Enter the number of N2: ")
let arr1 = [];
let arr2 = [];
let arr3 = [];
let med;
for(let i=0;i<N1; i++)
{
  arr1[i] = input.questionInt('Enter the number of b: ')
}
for(let j=0;j<N2;j++)
{
  arr2[j] = input.questionInt("Enter the number of C: ")
}
let sum = N1+N2;
let i=0, j=0;
for(let k=0;k<sum; k++)
{
    if(i<N1)
    {
        if(j<N2)
        {
            if(arr1[i]<arr2[j])
            {
                arr3[k] = arr1[i]
                i++;
            }
            else{
                arr3[k] = arr2[j]
                j++;
            }
        }
        else{
            arr3[k]=arr1[i]
            i++;
        }
    }
    else{
        arr3[k]=arr2[j];
        j++;
    }
}
let k=0,s=0;
if(sum%2==0)
{
    k = sum/2 - 1;
    s = sum / 2;
    med  = (arr3[k] + arr3[s]) / 2;
}
else
{
    med = arr3[((sum +1) / 2) - 1];
}
console.log(med);
