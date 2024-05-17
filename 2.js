// prime number
const input = require("readline-sync")
let N = input.question("Enter a number: ")
let P =1;
let S = 0;
while(P<=N)
      { 
      if(N%P!=0)
        { 
         
        }
       else
        {
         S = S+1;
        }
        P = P+1;
      } 
      if(S==2)
       {
        console.log("YES")
       }
       else
       {
         console.log("NO")
       }
          




    



