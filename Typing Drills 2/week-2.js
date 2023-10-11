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


