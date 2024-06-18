const input = require("readline-sync")
let N = input.questionInt("Enter the value of N: ")
let arr =[];
for(let i=0;i<N;i++)
{
    let arr1 = [];
    for(let j=0;j<N;j++)
    {
        arr1.push(0);
    }
    arr.push(arr1);
}
let n=1, t=0,b=N-1,l=0,r=N-1;
while(n<=N*N)
{
    for(let i=l;i<=r;i++)
    {
        arr[t][i]=n++;
    }
    t++;
    for(let i=t;i<=b;i++)
    {
        arr[i][r]= n++;
    }
    r--;
    for(let i=r;i>=l;i--)
    {
        arr[b][i]=n++;
    }
    b--;
    for(let i=b;i>=t;i--)
    {
        arr[i][l]=n++;
    }
    l++;
}
for(let i=0;i<N;i++)
{
    console.log(arr[i].join(' '));
}
