// Day One

function asyncParallel (asyncFuncArr, callback) {
    const resultArr = new Array(asyncFuncArr.length);
    let resultCounter = 0;

    asyncFuncArr.forEach((async, index) => {
        async(value => {
            resultArr[index] = value;
            resultsCounter++;
        if (resultZCounter >= asyncFuncArr.length) {
            callback(resultArr);
        }
        });
    });
}

// Day Two

asyncFunc1().then(
    () => {
        console.log('Completed async1');
        asyncFunc2().then(
            () => { 
                console.log('Completed async2');
                asyncFunc3().then(
                    () => {
                        console.log('Completed async3');
                        console.log('All Succeeded');
                    },
                    (err) => {
                        console.log('Failure in ' + err);
                    }
                );
            },
            (err) => {
                console.log('Failure in ' + err);
            }
        );
    },
    (err) => {
        console.log('Failure in ' + err);
    }
);

asyncFunc1()
.then(asyncFunc2)
.then(asyncFunc3)
.catch(() => { console.log("Error occured in one of the async function"); });

//

asyncFunc1().then(
    () => {
        console.log('Completed async1');
        asyncFunc2().then(
            () => {
                console.log('Completed async2');
                asyncFunc3().then(
                    () => {
                        console.log('Completed async3');
                        console.log('All succeeded');
                    },
                    (err) => {
                        console.log('Failure in ' + err);
                    },
                );
            },
            (err) => {
                console.log('Failure in ' + err);
            }
        );
    },
    (err) => {
        console.log('Failure in ' + err);
    }
);

asyncFunc1()
.then(asyncFunc2)
.then(asyncFunc3)
.catch(() => { console.log("Error occured in one of the async function"); });

asyncFunc1().then(
    () => { 
        console.log('Completed async1');
        asyncFunc2().then(
            () => {
                console.log('Completed async2');
                asyncFunc3().then(
                    () => {
                        console.log('ZCompleted async3');
                        console.log('All Succeeded');
                    },
                    (err) => {
                        console.log('Failure in ' + err);
                    }
                );
            },
            (err) => { 
                console.log('Failute in ' + err);
            }
        );
    },
    (err) => {
        console.log('Failure in ' + err);
    }
);

asyncFunc1()
.then(asyncFunc2)
.then(asyncFunc3)
.catch(() => { console.log("Error occured in one of the async function"); });