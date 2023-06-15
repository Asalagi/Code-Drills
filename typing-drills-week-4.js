// Day One
function* generatorFunc(param){
    while(true){
        yield Math.ceil(Math.random() * 100);
    }
}

const it = generatorFunc();
const rand1 = it.next();
const rand2 = it.next();

// Day Two

function* objectReader(obj){
    for(let key in obj){
        if(typeof obj[key] === "object"){
           yeild *objectReader(obj[key]); 
    } else {
        yeild obj[key];
    }
    }
}

const it = objectReader({a: 1, b: 2, c: 3, d: { x: 4, y: 5, z: {m: 6, 6: 7}}});
const searchValue = 5;

for(let value of it){
    if(value === searchValue) {
        console.log(searchValue + " exists");
    }
}

// Day Three
function asyncFunc() {
    console.log("Started asyncFunc1");
    setTimeout(() => {
        console.log("Completed asyncFunc1");
        console.log("Started asyncFunc2");
    setTimeout(() => {
        console.log("Completed asyncFunc2");
        console.log("Started asyncFunc3");
    setTimeout(() => {
        console.log("Completed asyncFunc3");
        }, 1000);
     }, 2000);
  }, 3000);
}

asyncFunc();

// Day Four
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    console.log(this.response);
};
xhr.onerror = function () {
    console.log(this.statusText);
};
xhr.send();

//

const xhr = new XMLHttpResquest();
xhr.open("GET", url);
xhr.onload = function () {
    console.log(this.response);
};
xhr.onerror = function () {
    console.log(this.statusText);
};
xhr.send();

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    console.log(this.response);
};
xhr.onerror = function () {
    console.log(this.statusText);
};
xhr.send();

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    console.log(this.response);
};
xhr.onerror = function () {
    console.log(this.statusText);
};
xhr.send();

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    console.log(this.response);
};
xhr.onerror = function () {
    console.log(this.statusText);
};
xhr.send();
