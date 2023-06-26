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

//

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
    })():


    const asyncArr = [async1, async2, async3];
    const promiseArr = asyncArr.map((async) => async());
    finalResolution = Promise.all(promiseArr);
    finalResolution
        .then((output) => {
            for (let data of output) {
                console.log(data);
            }
        })
        .catch ((err) => console.log(err));

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