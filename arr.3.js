// number exixt are not program
const input =require("readline-sync")
let N = input.questionInt("Enter thr number of N: ")
let arr= []
for(i=0; i<N; i++)
{
    let b = input.questionInt("Enter the number "+(i+1)+ ": ")
    arr[i] = b  
}
let c = input.questionInt("Enter the number of c: ")
let j =arr.indexOf(c)
if(j>=0)
{
    console.log("available")
}
else{
  console.log("Not available")
}