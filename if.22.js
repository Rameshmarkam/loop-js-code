/*
Write a program to take four sides of a quadrilateral ABCD in the order AB, BC, CD, DA and an internal angle I and Write a program to categorize the shape of a quadrilateral as either a square, rhombus, rectangle, parallelogram, or irregular quadrilateral.

Note: Inputs are given in the order mentioned in the question

Test Case1:
Input: 
10
8
10
8
72
Output: 
Parallelogram

Test Case2:
Input: 
5
5
5
5
90
Output: 
Square

Test Case3:
Input: 
10
10
8
8
90
Output: 
Irregular quadrilateral

 */
const input = require("readline-sync")
let AB = input.questionInt("Enter the length of AB: ")
let BC = input.questionInt("Enter the length of BC: ")
let CD = input.questionInt("Enter the length of CD: ")
let DA = input.questionInt("Enter the length of DA: ")
let I = input.questionInt("Enter the Angle of I: ")
if(AB==BC==CD==DA)
{
    if(I==90)
    {
        console.log("Square");
    }
    else{
        console.log("Rhombos");
    }
}
else if(AB==CD)
{
    if(BC==DA )
    {
      if(I==90)
      {
        console.log("Reactangle")
      }
      else{
        console.log("Parallogram")
      }
    }
    else{
    console.log("Irreguler")
    }
}
else{
console.log("Irregular")
}