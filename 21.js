// find duplicate number in array
const input = require("readline-sync")
let N = input.questionInt(" Enter the value of  N: ")
let arr = [N]
for(i=0; i<N; i++)
{
    arr[i] = input.questionInt("Enter the number: ")   
}
for(i=0;i<N; i++)
{
    let p=1;
    for(j=i+1;j<N; j++)
    {
        if(arr[i]==arr[j])
        {
            p+= 1;
            let k =j;
         for(k=j; k<N; k++)
         {
            arr[k] = arr[k+1]
         }
        }
        else
        {
            p = p;
        }
        N=N-1;
    } 
    if(p>1)
    {
     console.log(arr[i])
    }
    
}