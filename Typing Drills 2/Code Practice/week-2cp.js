// WEEK TWO DAY ONE - 10/09/2023

    // if square l x w = area
    // if rectangle  l + l + w + w = perimeter

const areaOrPerimeter = function(length, width) {
    if (length === width) {
        return length * width;
    } else {
        return length * 2 + width * 2;
    }
  };


function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false; 
};

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  };


function sumMix(x){
    let mixSum = 0;
    for (let n = 0; n < x.length; n++){
        let nums = x[n];
        mixSum += +nums;
    }
    return mixSum;
}

// best practice listed return x.map(a => +a).reduce((a, b) => a + b);

function getAverage(marks){
    let sum = marks.reduce((a, b) => a +b, 0);
    return Math.floor(sum / marks.length);
}

// ad mark numbers
// average marsk
// round down

// best practice return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


function sumArray(array) {
    if (array && array.length > 1) {
        let lowHigh = array.sort((a, b) => a -b).slice(1, -1);
        return lowHigh.reduce((a,b) => a + b, 0);
    } else {
        return 0;
    }};