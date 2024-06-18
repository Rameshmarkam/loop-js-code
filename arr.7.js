// two array sorted and merge
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let M = input.questionInt("Enter the number of M: ")
let A = [];
let B = [];
let S = [];
for(let i=0; i<N; i++)
{
    A[i] = input.questionInt("Enter the number of b "+(i+1)+ ": ")
}
for(let j=0; j<M; j++)
{
    B[j] = input.questionInt("Enter the number of c "+(j+1)+ ": ")
}
 let R=N+M;
 let i=0, j=0;
 for(k=0;k<R;k++)
 {
   if(i<N)
   {
    if(j<M)
    {
        if(A[i]<B[j])
        {
         S[k] = A[i]
         i++;
        }
        else{
            S[k] = B[j]
            j++;
        }
    }
    else
    {
        S[k] = A[i];
        i++;
    }
   }
   else
   {
        S[k] = B[j];
        j++;
   }
 }
 console.log(S);