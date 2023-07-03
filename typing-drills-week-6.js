// Day One
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.all(promiseArr);
finalResolution
    .then((output) => {
        for (let data of output) {
            console.log(data);
        }
    })
    .catch((err) => console.log(err));


const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
(async function () {
    try {
        output = await Promise.all(promiseArr);
        for (let data of output) {
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
})();

//Day Two

const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
    .then((output) => {
        for (let data of output) {
            if (data.status === "fulfilled")
                console.log(data.status + ": " + data.value);
            else if (data.status == "rejected")
                console.log(data.status + ": " + data.reason);
        }
    })
    .catch((err) => {
        console.log(err);
    });

//

const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
    .then((output) => {
        for (let data of output) {
            if (data.status === "fulfilled")
                console.log(data.status + ": " + data.value);
            else if (data.status == "rejected")
                console.log(data.status + ": " + data.reason);
        }
    })
    .catch((err) => {
        console.log(err);
    })();


    const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
    .then((output) => {
        for (let data of output) {
            if (data.status === "fulfilled")
                console.log(data.status + ": " + data.value);
            else if (data.status == "rejected")
                console.log(data.status + ": " + data.reason);
        }
    })
    .catch((err) => {
        console.log(err);
    })();


    const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
    .then((output) => {
        for (let data of output) {
            if (data.status === "fulfilled")
                console.log(data.status + ": " + data.value);
            else if (data.status == "rejected")
                console.log(data.status + ": " + data.reason);
        }
    })
    .catch((err) => {
        console.log(err);
    })();