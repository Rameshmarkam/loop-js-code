// 12(7) que  &same que try.js file me
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let m =N;
let k=""
for(i=1;i<=N;i++)
{
  for(i=i;i==1;i++)
  {
    for(j=1;j<=N-(N-1);j++)
    {
     k+=m;
    }
    k+="_"
    for(j=1;j<=N-1; j++)
    {
      k+= m;
      k+="_"
      m--;
    }
    k+="\n"
  }
  m=m+2;
  for(i=i;i==2;i++)
  {
    for(j=1;j<=N-2;j++)
    {
      k+=m;
      k+="_"
      m++;
    }
    m=m-2;
    for(j=N;j<=N; j++)
    {
      k+=m;
    }
    k+="\n"
  }
   m=m-1; 
   for(i=i;i==3;i++)
   { 
    for(j=1;j<=N-2;j++)
    {
    k+=m;
    k+="_"
    m=m+2;
    }
   }
   k+="\n"
   m=m-5
   for(i=i;i==4;i++)
   {
    for(j=N;j<=N;j++)
    {
      k+= m;

    }
    k+="\n"
   }
}
m=m+1;
for(j=N-1;j<=N;j++)
{
  k+=m;
  k+="_"
  m=m+2;
}
k+"\n"
m=m-2;
for(j=2;j<=N-3;j++)
{
  k+= m;
  k+"_"
  m=m+1;
}



console.log(k)