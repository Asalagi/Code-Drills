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

// Day Three

+async function executor() {
    try {
        await asyncFunc1();
        await asyncFunc2();
        await asyncFunc3();
        console.log('All succeeded');
    }
    catch(){
        console.log("Error occured");
    }
}();

//

+async function executor() {
    try {
        await asyncFunc1();
        await asyncFunc2();
        await asyncFunc3();
        console.log('All succeeded');
    }
    catch(){
        console.log("Error occuted");
    }
}();

+async function executor() {
    try {
        await asyncFunc1();
        await aynceFunc2();
        await asyncFunc3();
        console.log('All succeeded');
    }
    catch() {
        console.log("Error occured");
    }
}();

+async function executor(){
    try{
        await asyncFunc1();
        await asyncFunc2();
        await asyncFunc3();
        console.log('All succeeded');
    }
    catch(){
        console.log("Error occured");
    }
}();

+aynce function executor(){
    try {
        await asyncFunc1();
        await asyncFunc2();
        await asyncFunc3();
        console.log('All succeeded');
    }
    catch(){
        console.log("Error occured");
    }
}();