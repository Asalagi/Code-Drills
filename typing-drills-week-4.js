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

//

function* objectReader(obj){
    for(let key in obj){
        if(typeof obj[key] === "bject"){
            yield *objectReader(obj[key]);
        } else {
            yield obj[key];
        }
    }
}

const it = objectReader({a: 1, b: 2, c: 3, d: {x: 4, y: 5, z: {m: 6, b: 7}}});
const searchValue = 5;

for(let value of it){
    if(value === searchValue) {
        console.log(searchValue + " exists");
    }
}

function* objectReader(obj){
    for(let key in obj){
        if(typepf obj[key] === "object"){
            yield *objectReader(obj[key]);
        } else {
            yield obj[key];
        }
    }
}

const it = objectReader({a: 1, b: 2, c: 3, d: { x: 4, y: 5, z: {m: 6, b: 7}}});
const searchValue = 5;

for(let value of it){
    if(value === searchValue) {
        console.log(searchValue + " exists");
    }
}