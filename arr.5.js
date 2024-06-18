// print duplicate number
const input = require("readline-sync")
let N = input.questionInt("Enter the number of N: ")
let a = []
for(i=0; i<N; i++)
{
let b = input.questionInt("Enter the number "+(i+1)+ ": ")
    a[i] = b;
}
for(let i=0;i<N; i++)
{
    let p=1;
  for(j=i+1; j<N; j++)
  {
    if(a[i]==a[j])
    {
        p = p+1;
    let k = j;
         while(k<N)
         {
            a[k]=a[k+1]
            k++;
         }
         N--;
    }
    
  }
  if(p>1)
  {
    console.log(a[i])
  }
}