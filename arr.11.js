/*Learn these sorting algorithms and apply them to an unsorted array: Selection Sort
Insertion Sort
Bubble Sort
*/
// selection sort
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let arr = []
for(i=0;i<N; i++)
{
  arr[i] = input.questionInt('Enter the number of b: ')
}
 let temp;
for(i=0; i<N; i++)
{
    for(j=i+1; j<N; j++)
    {
        if(arr[i]>arr[j])
        {
           temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
        }
    }
}
console.log(arr)

// // bubble sort 

// for(i=0;i<N-1; i++)
// {
//     for(j=0;j<N-i-1; j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]= temp
            
//         }
//     }
// }
// console.log(arr)