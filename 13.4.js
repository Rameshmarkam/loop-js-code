// question no 13.4 pattren que
const input = require("readline-sync")
let N = input.question("Enter the number of N: ")
let k=""; b=2;
for(i=1;i<=N; i++)
{
    for(i=i;i==1; i++)
    {
      for(j=1;j<=N;j++)
      {
        k+="*"
      }
      k+="\n"
    }
    for(i=i;i<=N-1;i++)
    {
      for(j=1;j<=b;j++)
      {
        k+="*"
      }
      k+="\n"
    }
    for(i=i;i==N;i++)
    {
      k+="*"
    }
    k+="\n"
}
for(i=2;i<=N; i++)
{
 for(i=i;i<=N-1;i++)
 {
  for(j=1;j<=b;j++)
  {
   k+="*"
  }
  k+="\n"
 }
 for(i=1;i<=N;i++)
 {
  k+="*"
 }
 k+="\n"
}
console.log(k)