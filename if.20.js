// find bijli bill
const input = require("readline-sync")
let UNIT = input.questionInt("Enter the number of UNIT: ")
let K = ""
let CH,SUR,Bill;
if(UNIT<=50)
{
    CH = UNIT * 0.50 ;
    SUR = CH * 20 / 100 ;
    Bill = CH + SUR;
    K += Bill;
}
let U = 50;
let E = U * 0.50;
if(UNIT<=150)
{
    CH = (UNIT - U) * 0.75 + E;
    SUR = CH * 20 / 100 ;
    Bill = CH + SUR;
    K+= Bill;
}
let U1 = 150;
let E1 = 100 * 0.75 + E;
if(UNIT<=250)
{
    CH = (UNIT - U1) * 1.20 + E1;
    SUR = CH * 20 /100 ;
    Bill = CH + SUR ;
    K+= Bill;
}
else{
    let U2 = 250;
   let E2 = 100 * 1.50 + E1;
   CH = (UNIT - U2) * 1.50 + E2;
   SUR = CH * 20 / 100 ;
   Bill = CH + SUR;
   K+= Bill;
     
}
console.log(K)