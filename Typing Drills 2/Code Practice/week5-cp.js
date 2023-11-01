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