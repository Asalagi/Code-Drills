//Day One

setTimeout(function (text) {
    console.log(text);
}, 3000, 'Hello, Worls');

setTimeout(() => console.log('Hello, World'), 3000);

setTimeout(console.log, 3000, 'Hello, World');

// Day Two

function callbackExec(callback) {
    if (typeof callback === 'function') {
        setTimeout(() => {
            callback();
            console.log('Callback is executed after 2 seconds');
        }, 2000);
    }
}

function displayHello() {
    console.log('Hello');
}

callbackExec(displayHello);

// Day Three

const num1 = 1, num2 = 10;
for (let i = num1; i <= num2; i++) {
    setTimeout(() => console.log(i), i + 1000);
}

const num1 = 1, num2 = 10;
+function displayWithDelat(i){
    console.log(i);
    if(i !== num2)
    setTimeout(displayWithDelay, 1000, i++);
}(1);

// Day Four

const num1 = 1, num2 = 10;
let i = num1;
const intervalId = setInterval(() => {
    console.log(i++);
    if (i === num2 + 1)
    clearInterval(intervalId);
}, 1000);

// Day Five

var num1 - 10, num2 = 1; 
for (var i = num1; i >= num2; i--) {
    setTimeout(console.log, (num1 - i) * 1000, i);
}

var num1 = 10, num2 = 1;
for (var i = num1; i >= num2; i--) {
    (function (i) {
        setTimeout(function() { console.log(i); }, (num1 - i) * 1000);
    })(i);
}