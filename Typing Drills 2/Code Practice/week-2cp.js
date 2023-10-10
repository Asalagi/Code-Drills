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


// WEEK TWO DAY TWO - 10/10/2023

function doubleChar(str) {
    let letters =  str.split('');
    return letters.map(l => l.repeat(2)).join('');
  }
  
  // could have done str.split.map.join

  
  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a +b);
  }



function feast(beast, dish) {
    if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length -1)) {
        return true;
    } else {
        return false;
    }
}

// find first and last character of a string
// compare first and last character of beast to  dish
// pass true or false

// could have simplified with beast[0] instead of charAt


function getAge(inputString){
    return parseInt(inputString);
}


function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600);
}

// km/hr to cm/se
// 1km = 100,000 cm
// 1hr = 3600 sec


function switchItUp(number){ 
    switch (number) {
        case 0: return 'Zero';
        break;
        case 1: return 'One';
        break;
        case 2: return 'Two';
        break;
        case 3: return 'Three';
        break;
        case 4: return 'Four';
        break;
        case 5: return 'Five';
        break;
        case 6: return 'Six';
        break;
        case 7: return 'Seven';
        break;
        case 8: return 'Eight';
        break;
        case 9: return 'Nine';
        break;
        default:
    }
}


function checkForFactor (base, factor) {
    if (base % factor === 0) {
        return true;
    } else {
        return false;
    }
}