// // try que no 12(7)
// const input = require("readline-sync")
// let N = input.questionInt("Enter a number: ")
// let K = "";
// for(i=N; i>=1; i--)
// {
    
//  for(j=1; j<=i; j++)
//   {
//     K+= i;
//     K+="_";
   
//   } 
//   K+="\n"
// }
// for(i=2;i<=N;i++)
// {
//   for(j=1;j<=i;j++)
//   {
//     K+= i;
//     K+="_";
//   }
//   K+="\n"
// }
// console.log(K)
 const input = require("readline-sync")
 let N = input.questionInt("Enter a number of N: ")
 let k=""; 
 let c=2*N-1
 for(i=1;i<=N;i++)
 { 
  let n=N-(i-1);
    for(j=1;j<=c;j++)
    {  
     if(j%2==0)
     {
      k+="_"
     }
     else if (j == 3)
     {
      k += N;
      n = N -1;
     }
     else 
     {
      k += n;
      n--;
     }
   }
   k+="\n"
   c=c-2;
  }
  c = 3;   
  for(i=N - 1;i>0;i--)
  { 
   let n=N-(i-1);
     for(j=1;j<=c;j++)
     {  
      if(j%2==0)
      {
       k+="_"
      }
      else if (j == 3)
      {
       k += N;
       n = N -1;
      }
      else 
      {
       k += n;
       n--;
      }
    }
    k+="\n"
    c=c+2;
   }
   console.log(k)
 