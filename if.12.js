// print number negative positive and zero
const input = require("readline-sync")
let N1 = input.questionInt("Enter the value of N1: ")
if(N1==0)
{
  console.log(" Number is : Zero")  
}
else if(N1>0)
{
   console.log("Number is : Positive") 
}
else{
    console.log("Number is : Negative")
}