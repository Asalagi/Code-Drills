// WEEK ONE - DAY ONE - 10/03/2023

typeof 50; // number
typeof "text"; // string
typeof true; // boolean
typeof undefined; // undefined
typeof function () {}; // function
typeof 10n; // bigint
typeof Symbol(); // symbol 'returns a symbol primitive.'
// js primitive is not an object and has no methods of properties
typeof [1, 2]; // object
typeof {}; // object
typeof NaN; ;// number (Not a Number)
typeof undeclaredVar; // undefined
typeof Infinity; // number
typeof null; // object
typeof /regex/; // object 'regular expression'
// regular expressions are patterns used match character combinations in strings.
// for example, can be used to check if email in a email form is properly formatted.


1 + "2"; // 12
1 + 2 + "3"; // 33
1 + 2 + "3" + "4"; // 334
1 + "One"; // 1One

"1" + 2; // 12
"1" + "2" + 3; // 123
"1" + "2" + (3+4); // 127
"One" + 1; // One1

1 + 2 + "3" + "4" + 5 + 6; // 33456
1 + 2 + "3" + "4" + (5 + 6); // 33411
"1" + "2" + (3+4) + 5 + "6"; //12756


const num = 12;

String(num); // "12"
num.toString; // "12"
num + ""; // "12"

const str = "12";

Number(str); // 12
+str; // 12
parseInt(str); // 12


