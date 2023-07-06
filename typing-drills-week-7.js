// Day One

function asyncFunc1() {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve("Resolved async1");
        }, 2000)
    );
}
function asyncFunc2() {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve("Resolved async2");
        }, 3000)
    );
}
function asyncFunc3() {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            reject("Rejected async3");
        }, 1000)
    );
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
const promiseArr = asyncArr.map((async) => async());
Promise.race(promiseArr).then(console.log).catch(consoloe.log);

// Day Two

function* generatorFUNC(param) {
    const num1 = yield;
    const num2 = yield;
    return num1 + num2;
}

const it = generatorFunc();
it.next();
it.next(3);
const sum = it.next(5);
sum.value;

// Day Three

function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}

for (let value of gen1()) {
    console.log(value)
}

//

function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}

for (let value of gen1()) {
    console.log(value)
}


function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}

for (let value of gen1()) {
    console.log(value)
}


function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}

for (let value of gen1()) {
    console.log(value)
}


function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}

for (let value of gen1()) {
    console.log(value)
}


function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}

for (let value of gen1()) {
    console.log(value)
}