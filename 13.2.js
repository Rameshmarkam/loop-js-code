// // pattren que in using while loop
//  const input = require("readline-sync")
//  let N = input.question("Enter the number of N: ")
//  let i=1; k=""; p = 2;
//  while(i<=N)
//  {
//     while(i==1)
//     {
//         j=1;
//         while(j<=N)
//         {
//             k+="*";
//             j++
//         }
//         i++
//         k+="\n"
//     }
//     while(i<=N-1)
//     {  
//         j=1;
//         while(j<=p)
//         {
//             k+="*"
//             j++
//         }
//         i++
//        k+="\n"
//     }
//     while(i==N)
//     {
//         j=1
//         while(j<=N)
//         {
//             k+="*"
//             j++
//         }
//         k+="\n"
//         i++
//     }
//  }
// console.log(k)

// pattren que 13.2
const input = require("readline-sync")
let N = input.question("Enter the number of N: ")
let k=""; p=2;
for(i=1;i<=N; i++)
{
    while(i==1)
    {
     for(j=1; j<=N;j++)
     {
        k+="*";
     }
    k+="\n";
    i++;
    }
    while(i<N)
    {
    for(j=1;j<=p;j++)
    {
        k+="*"
    }
    i++;
    k+= "\n"
    }
    while(i==N)
    {
        for(j=1; j<=N; j++)
        {
            k+= "*"
        }
        k+="\n"
        i++;
    }
}
console.log(k)
