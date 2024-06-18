// find the frequency number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let arr = []
for(i=0; i<N; i++)
{
let b = input.questionInt("Enter the number "+(i+1)+ ": ")
    arr[i] = b;
}
for(let i=0;i<N; i++)
{
    let p=1;
  for(j=i+1; j<N; j++)
  {
    if(arr[i]==arr[j])
    {
        p = p+1;
        let k = j;
         while(k<N)
         {
            arr[k]=arr[k+1]
            k++;
         }
         N--;
    }
  }
  console.log(arr[i]+" - " + p)
}