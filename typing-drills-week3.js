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

//

const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promis.resolve());


const asynceFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promise.resolve());


const asyncFuncArr = [ asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promise.resolve());


const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promise.resolve());


const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promise.resolve());


const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promise.resolve());



const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promise.resolve());


const AsyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promise.resolve());