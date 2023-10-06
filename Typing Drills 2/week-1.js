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


// WEEK ONE - DAY TWO - 10/05/2023

const bigNum1 = 1526688934595n,
    bigNum2 = 256489246848n,
    num3 = 1562365;

const bigSum = bigNum1 + bigNum2;
const bigDiff = bigNum1 + bigNum2;
const total = bigNum1 + bigNum2 + BigInt(num3);


const num1 = 10,
    num2 = 20;

true || false; // true 
false || false; // false
false || num1; // 10
0 || num2; // 20
"text" || true; // "text"
num1 > 0 || num2 < 0; // true

const num1 = 10,
    num2 = 20;

true && true; // true
true && false; //false
true && num1; // 10
num1 && num2; // 20
"text" && num1 + num2; // 30
num1 > 0 && num2 < 0; //false

undefined ?? 10; // 10
null ?? 20; // 20
false ?? num1; // false
0 ?? num2; //0

!!10; // true
!!{}; // true
!!"" // false
!!0; // false

// WEEK ONE DAY THREE - 10-06-2023
Number.isInteger(1.5); // false
Number.isInteger(-15); // true

Number.parseInt("5.8"); // 5
Number.parseInt("123x"); // 123

Number.parseFloat("5.86"); // 5.86
Number.parseFloat("-12.69x"); // -12.69

Number.isNaN(Nan); // true
Number.isNaN("text" - 10); // true
Number.isNaN("text"); // false

(56.369).toFixed(20); // 56.37
(59).toFixed(3); // 59.000

(32.458).toPrecision("3"); // 32.5
(98.1).toPrecision(1); // 1e+2


Number.isNaN =
    Number.isNaN ||
    function isNaN(input) {
        return typeof input === "number" && input !== input;
    };

    Math.abs(-5)); // 5
    Math.floor(1.6)); // 1
    Math.ceil(2.4)); // 3
    Math.round(3.8)); // 4
    Math.max(-4, 5, 6)); //6
    Math.min(-7, -2, 3)); // -7
    Math.sqrt(64)); // 8
    Math.pow(5, 3)); // 125
    Math.trunc(-6.3)); // -6