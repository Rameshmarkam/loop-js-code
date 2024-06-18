/*// find largest number
const input = require("readline-sync")

let a = input.question("enter a number:")
let b = input.question("enter a number:")
let c = input.question("enter a number:")

 if(a>b) // check grether
     {  
         if(a>c)
         {
         console.log(a);  // print grether number
         }else
         {
             console.log(c);
         }
     }
     else if(b>c) // check grether
     { 
         console.log(b);
     } else
      { 
         console.log(c);
      } 
      */
    // input 4 number and find max
     
    const input = require("readline-sync")
    let a = input.question("Enter first number: ")
    let b = input.question("Enter second number: ")
    let c = input.question("Enter third number: ")
     let d = input.question("Enter fourth number: ")
    if(a>b) 
        { L = a;           // take variable L & S
          S = b;
        }else
        { L = b;
          S = a;
        }
    if(c>d)
        { L1 = c;
          S1 = d;
        }else
         { L1 = d;
           S1 = c;

         }
         if(L>L1)
          { console.log(L)
          }else{
            console.log(L1)
          }
          
          
    /*//find third max number in 4 input
    const input = require("readline-sync")
    let a = input.questionInt("Enter a number: ")
    let b = input.questionInt("Enter a number: ")
    let c = input.questionInt("Enter a number: ")
    let d = input.questionInt("Enter a number: ")
      if(a>b)
          { 
            L = a;
            S = b;
         }
         else
          {
            L = b;
            S = a;
          }
      if(c>d) 
      {
         L1 = c;
         S1 = d;
      }
      else
           { L1 = d;
             S1 = c;
           }
           if(L>L1)
           { m = L;
             mi = L1;
            }
            else
             {
               m = L1;
               mi = L;
             }

            if(S>S1)
             {
                m1 = S;
                mi1 = S1;
             }
             else
             {
              m1 = S1;
              mi1 = S;
             }
             if(mi>m1)
             {
                m2 = mi;
                mi2 = m1;
               }
               else
               {
                m2 = m1;
                mi2 = mi;
               }
             if(mi1>mi2)
             
             {
              console.log(mi1)
             }
             else
             {
              console.log(mi2)
             }
             */

       