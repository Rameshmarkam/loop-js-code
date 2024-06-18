// pattren 2D array que
const input = require("readline-sync")
let N = input.questionInt("Enter the number of row: ")
let arr=[];
//let i=0,j=0;R=N-1, R1=1,num=1,C=N-1,C1=0;
//let p = N*N;
// let dir = 1;
// let l=0,r=N-1,t=0,b=N-1;
// let k=1;
for(let i=0; i<N; i++)
{
    arr[i]=[];
    for(let j=0;j<N;j++)
    {
        arr[i][j] = input.questionInt("Enter the element: ")
    }
}
let dir = 1;
let l=0,r=N-1,t=0,b=N-1;
let k=1;
while(l<=r && t<=b)
{
 if(dir==1)
 {
    for(let i=l;i<=r;i++)
    {
        arr[t][i] = k++;
    }
    dir=2;
    t++;
 }
 if(dir==2)
 {
    for(let i=t;i<=b;i++)
    {
        arr[i][r]=k++;
    }
    r--;
    dir=3;
 }
 if(dir==3)
 {
    for(let i=r;i>=l;i--)
    {
        arr[b][i]=k++;
    }
    dir=4;
    b--;
 }
 if(dir==4)
 {
    for(let i=b;i>=t;i--)
    {
        arr[i][l]=k++;
    }
    l++;
    dir=1;
 }
 return arr;
}
console.log(arr)

