// Day One

function setTimeoutPromise(delay) {
    function resolver(resolve){
        setTimeout(resolve, delay);
    }
    return new Promise(resolver);
}

console.log("Taks started");
const timeoutPromise = setTimeoutPromise(3000);
timeoutPromise.then(() => {
    console.log("Task completed");
});

// Day Two

function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("Get", url);
        xhr.onload = function () {
            try {
                if (this.status === 200) {
                    resolve(this);
                } else {
                    reject(this);
                }
            } catch (e) {
                reject(e);
            }
        };
        xhr.onerror = function () {
            reject(this);
        };
        xhr.send();
    });
}

fetchData("http://reqbin.com/echo/get/json")
.then((data) => {
    console.log(data);
})
.catch((err) => console.log(err));

//

function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            try {
                if (this.status === 200) {
                    resolve(this);
                } else {
                    reject(this);
                }
            } catch (e) {
                reject(e);
            }
        };
        xhr.onerror = function () {
            reject(this);
        };
    });
}

fetchData("https://reqbin.com/echo/get/json")
.then((data) => {
    console.log(data);
})
.catch((err) => console.log(err));