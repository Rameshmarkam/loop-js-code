// salary que
const input = require("readline-sync")
let sal = input.questionInt("Enter the number of sal: ")
let p = ""
let HRA,DA,SUM,TSR;
if(sal<=10000)
{
 HRA = sal * 20 / 100 ;
 DA = sal * 80 / 100 ;
 SUM = HRA + DA;
 TSR = sal + SUM;
 p += TSR;
}
else if(sal<=20000)
{
 HRA = sal * 25 / 100 ;
 DA = sal * 90 / 100 ;
 SUM = HRA + DA;
 TSR = sal + SUM;
 p += TSR;
}
else {
 HRA = sal * 30 / 100 ;
 DA = sal * 95 / 100 ;
 SUM = HRA + DA;
 TSR = sal + SUM;
 p += TSR;
}
console.log(p)

