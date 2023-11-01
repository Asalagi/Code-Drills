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