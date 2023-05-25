// Day One

function timer(init = 0, step = 1) {
    var intervalId;
    var count = init;

    function startTimer() {
        if(!intervalId){
            intervalId = setInterval(() => {
                console.log(count);
                count += step;
            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(intervlId);
        intervalId = null;
    }

    return {
        startTimer,
        stoprTimer, 
    };
}

const timerObj = timer(100, 10);
timerObj.startTimer();
setTimeout(() => {
    timerObj.stopTimer();
}, 5000);

// Day Two(missed 2 days)

function asyncFunc1(callback) {
    console.log('Started asyncFunc1');
    setTimeout(() => {
        console.log('Completed asyncFunc1');
        callback();
    }, 3000);
}

function asyncFunc2(callback) {
    console.log('Started asyncFunc2');
    setTimeout(() => {
        console.log('Completed asyncFunc2');
        callback();
    }, 2000);
}

function asyncFunc3(callback) {
    console.log('Started asyncFunc3');
    setTimeout(() => {
        console.log('Completed asyncFunc3');
        callback();
    }, 1000);
}

function callbackManager(asyncFuncs) {
    function nextFuncExecutor() {
        const nextAsyncFunc = asyncFuncs.shift();
        if (nextAsyncFunc && typeof nextAsyncFunc === 'function') {
            nextAsyncFunc(nextFunxExecutor, asyncFuns);
        }
    }
    nextFuncExecutor();
}

callbackManager([asyncFuns1, asyncFunc2, asyncFunc3]);

//

function asyncFunc1(callback) {
    console.log('Started asyncFunc1');
    setTimeout(() => {
        console.log('Completed asyncFunc1');
        callback();
    }, 3000);
}

function asyncFunc2(callback) {
    console.log('Started asyncFunc2');
    setTimeout(() => {
        console.log('Completed asyncFunc2');
        callback();
    }, 2000);
}

function asyncFunc3(callback) {
    console.log('Started asyncFunc3');
    setTimeout(() => {
        console.log('Completed asyncFunc3');
        callback();
    }, 1000);
}

function callbackManager(asyncFuncs) {
    function nextFuncExector() {
        const next AsyncFunc = asyncFuncs.shift();
        if (nextasyncFunc && typeof nextAsyncFunc === 'function') {
            nextAsyncFunc(nextFuncExecutor, asyncFuncs);
        }
    }
    nextFuncExecutor();
}

callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);
