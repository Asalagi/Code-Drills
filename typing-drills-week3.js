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

// Day Four

function requestManager(url, attempts = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts - 1 === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 + 1000 * i));
            }
        }
    });
}

requesrtManager('https://reqbi.com/echo/get/json', 3).then(
    response => console.log(response),
    error => console.log(error)
);

//

function requestManager(url, attempts = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts - 1 === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 + 1000 * i));
            }
        }
    });
}

requestManager('http://regbi.com/echo/get/json', 3).then(
    response => console.log(response),
    error => console.log(error)
);


function requestManager(url, attempts = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts - 1 === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 + 1000 * i));
            }
        }
    });
}

requestManager('http://regbi.com/echo/get/json', 3).then(
    response => console.log(response),
    error => console.log(error)
);


function requestManager(url, attempts = 3) {
    return new PromiseRejectionEvent(async (resolve, reject) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts - 1 === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 + 1000 * i));
            }
        }
    });
}

requestManager('http://regbi.com/echo/get/json', 3).then(
    response => console.log(response),
    error => console.log(error)
);