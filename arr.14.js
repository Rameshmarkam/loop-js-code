/*Write a program to convert a given Roman numeral into its decimal equivalent. The following table gives the Roman numerals and their decimal equivalents: 
Roman Decimal
M          1000
D           500
C           100
L            50
X            10
V            5
I              1

 */
// roman to intiger
function RomantoInt(romanStr)
{
    let num = 0;
    let arr = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
    for(let i=0; i<romanStr.length; i++)
    {
        if(arr[romanStr[i]]<arr[romanStr[i+1]])
        {
            num -= arr[romanStr[i]];
        }
        else
        {
         num += arr[romanStr[i]];
        }
    }
  return num;
}
console.log(RomantoInt("IVMD"))