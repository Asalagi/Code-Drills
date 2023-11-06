// WEEK FIVE DAY ONE - 11/01/2023

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
        return true;
    } else {
        return false;
    }
}

// "Month, date, year" is the string format for the date
// got structure right, had to look up for the date.parse part

function noOdds( values ){
    return values.filter(v => v % 2 === 0);
}


function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * (discount / 100)));
}

// YAY ME! Did all on my own no help

function _if(bool, func1, func2) {
    return bool ? func1() : func2();
}


function binToDec(bin) {
    return parseInt(bin, 2);
}


function solution(digits){
    let result = 0;
    for(let i = 0; i < digits.length; i++){
        let num = digits.substring(i, 5);
        if(Number(num) > result){
            result = Number(num);
        }
    }
    return result;
}

// had to look up, didnt know where to start. 


function squareOrSquareRoot(array) {
    return array.map(i => Math.sqrt(i) == Math.sqrt(i).toFixed(0) ? Math.sqrt(i) : i * i);  
}

// if number has sqrt find it, if it does pow it. 4 sqrt is 2, 3 has no square root so pow and it 9


function addLength(str) {
    let strSp = str.split(' ');
    return strSp.map((i) => `${i} ${i.length}`);
}

// got the split then started to over think :(

// ADDING IN WEEK 5 WITH WEEK 6
// WEEK SIX DAY ONE - 11/06/2023

var replaceDots = function(str) {
    return str.replaceAll('.', '-');
}


function hello(name) {
    return `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`;
}
 

function triangular( n ) {
    return n > 0 ? n * (n + 1) / 2 : 0; 
}


function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }

// did not get this assignment at all!