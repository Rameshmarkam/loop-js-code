// pattren que13.3
const input = require("readline-sync")
let N = input.question("Enter the number of N: ")
let k=""; i=1; p=2
while(i<=N)
{
    while(i==1)
    {
        k+="*"
        k+="\n"
        i++
    }
    while(i<=N-1)
    {
        j=1
        while(j<=p)
        {
            k+="*"
            j++
        }
        i++
        k+="\n"
    }
    while(i==N)
    {
        k+="*"
        k+="\n"
        i++
    }

}
console.log(k)