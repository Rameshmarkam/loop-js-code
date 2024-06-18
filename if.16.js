// find leap year
const input = require("readline-sync")
let Year = input.questionInt("Enter the number of Year: ")
if(Year%4==0)
{
    if(Year%100!=0)
    {
       if(Year%400==0)
        {
          console.log("NO")
        }
        else{
         console.log("YES")
        }
    }
    else(
        console.log("YES")
    )
} 
else{
console.log("NO")
}
