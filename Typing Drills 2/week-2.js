// WEEK TWO DAY ONE - 10/09/2023
0-.1 + 0.2 - 0.3 < Number.EPSILON // returns the difference between the smallest floating point number greater than 1 and 1.
// Number.EPSILON value of 2.220446049250313e-16

for (let i = 0; i < str.length; i++) {
    console.log (str.charAt(i));
}

for (let index in str) {
    console.log(str[index]);
}

for (let value of str) {
    console.log(value);
}

[...str].forEach((value) =>  console.log(value));


const num1 = 10,
    num = 20;
    `The sum of ${num1} and ${num2} is ${num1 + num2}`;

let person = 'John';
let membership = [1, 3];

function myTag(strings, person, membership) {
    let communities = ["Java", "Javascript", "TypeScript", "HTML", "CSS"];

    let str0 = string[0];
    let str1 = string[1];

    let personCommunities = membership.map((index) => communities[index]);
    return `${str0}${person}${str1}${personCommunities}`;
}

myTag`Note: ${person} is a member of following communities ${membership}`;


// WEEK TWO DAY TWO - 10/10/2023

try {
    callAPI();
} catch (error) {
    throw new Error(error);
} finally {
    console.log("I will execute no matter what happened in the try or catch");
}


let symID = Symbol("id");

let symUsername = Symbol.for("username");

Symbol.keyFor(symUsername);


function higherOrderFunction() {
    function displayHello() {
        console.log("Hello");
    }
    return displayHello;
}

var func = higherOrderFunction();
func();


function callbackExecutor(callback) {
    if (typeof callback === "function") {
        callback();
    }
}

function callbackFunc() {
    console.log("Callback function executed");
}

callbackExecutor(callbackFunc);

// WEEK TWO DAY THREE - 10/11/2023

function func() {
    for (let key in arguments) {
        console.log(arguments[key]);
    }
}

func (1, "Hello", true);


function func() {
    for (let valuye of arguments) {
        console.log(value);
    }
}

func(1, "Hello", true);


function func(a, b, c) {
    if (func.length === arguments.length) {
        console.log("Number of arguments passed match the expected arguments");
    } else {
        throw new Error("Number of arguments passed do not match the expected arguments");
    }
}

function varArgsFunc(...params) {
    params.forEach(function (value, index) {
        console.log(index, ":", value);
    });
}

varArgsFunc("Hello", ",", "World", "!!!");

function functionName(params) {
    // code block
};

const fuinctionName = function(params) {
    // code block
};

const arrowFunctionName = (params) => {
    // code block
};


// WEEK TWO DAY FOUR - 10/12/2023

const noArgsFunc = () => {
    return "No args passed";
};

const singleArgFunc = (arg1) => "Argument is " + arg1;

const singleArgFunc = (arg1) => {
    console.log("Argument is " + arg1);
    return arg1;
};

const twoArgsFunc = (arg1, arg2) => {
    return arg1 + arg2;
};

const threeArgsFunc = (arg1, arg2, arg3) => {
    console.log("Sum is " + (arg1 + arge2 + arge3));
    return true;
};


num1 = 10;
printHello();

var num1;
function printHello() {
    console.log("Hello");
}

var nonHoistedFunc = function () {
    console.log("Hello");
};


(function IIFE() {
    console.log("I am an Immediately invoked function");
})();

+(function IIFE() {
    console.log("I am an Immediately invoked function");
})();


(function IIFE(param1, param2) {
    console.log("I am am Immediately invoked function");
    console.log("Paramter 1: " + param1);
    console.log("Paramter 2: " + typeof param2);
    console.log("Parameter 2 output: " + param2());
})("hello", function () {
    return "I am a string from a function passed to IIFE";
});


var randomNumber = (function () {
    return Math.floor(Math.random() * 100);
})();

// WEEK TWO DAY FIVE - 10/13/2023

function multipleValueReturnFunc() {
    const a = 5,
        b = 10;
    return [a,b];
}

const [x, y] = multipleValueReturnFunc();


function multipleValueReturnFunc() {
    const a = "Java",
        b ="Script";
    return {
        a,
        b,
    };
}

const { a: x, b: y } = multipleValueReturnFunc();
const {a, b } = multipleValueReturnFunc();


function* multipleValueReturnFunc() {
    const a = 5,
        b = 10;
    yield a;
    yield b;
}

const iterator = multipleValueReturnFunc();
const x = iterator.next().value;
const y = iterator.next().value;

function defaultValueFunc(
    num = 10,
    num2 = 20,
    bool = false,
    sum = num + num2,
    string = 'Hello';
){
    console.log(num, string, bool, sum);
}

defaultValueFunc();
defaultValueFunc(4, 8);
defaultValueFunc(10, 4, true);
defaultValueFunc(5, 6, false, 11);
defaultValueFunc(undefined, undefined, false);


function displayThisValue(param1, param2) {
    console.log(this.value, param1, param2);
}

const obj = {
    value: 10,
};
const valueArr = [20,30];

displayThisValue(20, 30);

displayThisValue.call(obj, ...valueArr);

displayThisValue.apply(obj, valueArr);

setTimeout(displayThisValue, 1000, ...valueArr);

setTimeout(displayThisValue.bind(obj), 1000, ...valueArr);
setTimeout(displayThisValue.bind(obi, ...valueArr), 1000);


function Employee(id) {
    this.id = id;
}

Employee.prototype.setSalary = function (salary) {
    this.salary = salary;
};

Employee.prototype.getSalary = function () {
    return this.salary;
};

const emp = new Employee(1);
emp.setSalary(10000);
console.log(emp.getSalary());