// Convertion and Operation in javasctipr

//Number
let score = "33abc"

// console.log (typeof score);
// console.log (typeof (score));

let valueInNumber = Number(score)
// console.log (typeof valueInNumber); 


/* NOTES ************************************************

1 => true ; 0 =>  false
"" => false ; "Data" => true
undefined => Number = NaN
string  => number = Nan
null => number = 0

*/



/* ********************Operations*********************** */

let value = 3;
let negvalue = -value
//console.log(negvalue)

//adding
console.log(2+2)
//substring
console.log(2-2)
//multiplication
console.log(2*2)
//division
console.log(2/2)
//modulus for remainder
console.log(2%2)
// square
console.log(2**2)

//adding 2 strings
let str1 = "Hello World"
let str2 = " Atanu"

let str3 = str1 + str2

console.log(str3)





console.log("1" + 2)
/*here the output will be 12 as 1 is a string and it will be added to the number.

like this : "1" + 2 = 12
*/
console.log(1 + "2")
/*here the output will be 12 as 1 is a number and it will be added to the string.

like this : 1 + "2" = 12
*/
console.log("1" + 2 + 2)
/*here the output will be treated as string as the first one is a string.

like this : "1" + 2 + 2 = 122
*/
console.log(1 + 2 + "2")
/*

like this : 1 + 2 + "2"  = 3 + "2" = 32
*/


//Tricky Convertions

console.log (+true);
// here it gives the output as 1

console.log(+"");
//here the output will be 0



