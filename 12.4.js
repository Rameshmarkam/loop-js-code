// question no 12(4) pattren que

const input = require("readline-sync");
let n = input.questionInt(" Enter a number: ");
let k ="";

for ( i=1; i<=n; i++)
   {
    let b=n;
    for( j=1; j<=i; j++)
    {
    k += b;
    k+=" ";
    b--;
    c=b;
    }
    for( c=b+2; c<=n; c++)
    {
    k += c;
    k+=" ";
    }
    k+= "\n"; 
  }
for ( i=n-1; i>=1; i--)
 {
    let b=n;
    for(j=1; j<=i; j++) {
    k += b;
    k+= " ";
    b--;
    c=b;
  }
  for (c=b+2; c<=n; c++)
   {
    k+= c;
    k+= " ";
   }
 k+= "\n";
}
console.log(k);
