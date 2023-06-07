// Day One
+(async function executor() {
    try {
        await asyncFunc1();
        console.log('Async1 success');
    } catch {
        console.log('Async1 failure');
    }
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async failure');
    }
     try {
        await asyncFunc3();
        console.log('Async3 success');
     } catch {
        console.log('Async3 failure');
     }
     console.log('All succeeded');
})();

// Day Two

const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promise.resolve());

const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promnise.resolve());

// Day Three

function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

const asyncArr = [asyncFun1, asyncFunc2, asyncFunc3, timeoutFunc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catch(console.log);

//


function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFunc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catfch(console.log);


function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFunc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catfch(console.log);

function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFunc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catfch(console.log);

function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFunc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catfch(console.log);

function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFUnc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catch(console.log);

function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFUnc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catch(console.log);