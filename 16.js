// prime number count
const input = require("readline-sync")
let N = input.questionInt("Enter a number: ")
let a=1;
for(i=3;i<N;i++)
{
    p =2
    sum=0
    while(i>p)
    {
        if(i%p!=0)
        {
            p++
        }
        else{
            sum++
            p++
        }
    }
    if(sum==0)
    {
        a++
        //i++
    }
}
 console.log(a)  