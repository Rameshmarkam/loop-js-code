// pattren que 13.1
const input = require("readline-sync")
let N = input.question("Enter the number: ")
let k= "";
let p = 2; i=1;
while(i<=N)
{
    while(i==1)
    {
        k+="*"
        i++;
        k+="\n"
    }
    while(i<=N-1)
    {
        a=1;
       while(p>=a) 
       {
        k+="*"
        a++;
       }
       i++;

       k+="\n"
    }
    while(i==N)
    {
        a =1;
        while(a<=N)
        {
            k+="*"
            a++;
        }
        k+="\n"
        i++

    }
}
console.log(k)
