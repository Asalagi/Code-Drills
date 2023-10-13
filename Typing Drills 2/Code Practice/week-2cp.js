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


function square(n) {
    return n * n;
}


function twiceAsOld(dadYO, sonYO) {
    return Math.abs((dadYO - (sonYO * 2)));
}
// dadYO - (sonYO * 2)
// 36 - 7 * 2 = 14 = 22


function hoopCount (n) {
    return n >= 10 ? 'Great, now move on to tricks' : "Keep at it until you get it";
}


function removeEveryOther(arr){
    let words = [];
    for (let w = 0; w < arr.length; w+=2) {
        words.push(arr[w]);
    }
    return words;
}

// WEEK TWO DAY THREE - 10/11/2023

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
        default: 'Not a planet';
    }
    
    return name;
  }


function monkeyCount(n) {
    let monkeys = [];
    for (let i = 1; i <= n; i++) {
        monkeys.push(i)
    }
    return monkeys;
}


function enough(cap, on, wait) {
    if (wait - (cap - on) > 0) {
        return wait - (cap - on)
    } else {
        return 0;
    }
}

// best practice math.max(wait + on - cap, 0)


function firstNonConsecutive (arr) {
    for(let n = 0; n < arr.length - 1; n++) {
        if(arr[n]+1 !== arr[n+1]) {
            return arr[n+1]
        } 
    }
  return null;
}
// ^^ struggled with this one, had to look up
// loop through check if n + 1 also equals to n - 1 if not null if yes move on

function sayHello(name) {
    return `Hello, ${name}`;
}

function move (position, roll) {
    return roll * 2 + position;
}


function strCount(str, letter){  
    let word = str.split("");
    return word.filter(w => w === letter).length;
  }

// could have done str.split(letter).length-1

// WEEK TWO DAY FOUR - 10/12/2023

function bonusTime(salary, bonus) {
    if (bonus === true) {
        return `£${salary * 10}`;
    } else {
        return `£${salary}`;
    }
  }

  //^ could have compacted to bonus ? true conditions : false conditions

function testEven(n) {
    return n % 2 === 0 ? true : false;
}


function between(a, b) {
    let missing = [];
    for(let i = a; i <= b; i++) {
        missing.push(i)
    }
    return missing;
  }


  var humanYearsCatYearsDogYears = function(humanYears) {
    let cat = 0;
    let dog = 0;
    for(let y = 1; y <= humanYears; y++){
        if (y === 1) {
            cat += 15;
            dog += 15;
        } else if (y === 2){
            cat += 9;
            dog += 9;
        } else {
            cat += 4;
            dog += 5;
        }
    }
    return [humanYears, cat, dog];
  }

  // 1 human yr = 15 cat AND dog yr
  // 2 human yr = 15 PLUS 9 cat AND dog yr
  // 3+ human yr = 24 PLUS cat yr (4) dg yr (5)

  //^ struggled, had concept of if else, else if statement but unsure on the exact of everything


  String.prototype.isUpperCase = function() {
    if (this.toString() === this.toUpperCase()) {
        return true;
    } else {
        return false;
    }
  }

  //^ sturggled! had to look up. read some on prototype. it needed 'this'.
// could have done return this.toUpperCase() === this.toString() to simplify

function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0;
  }


function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}


function stringy(size) {
    let str = '';
    for(let s = 1; s <= size; s++){
        str += s % 2;
    }
    return str;
  }


  function xor(a, b) {
    if(a === b) {
        return false;
    } else {
        return true;
    }
  }

  // xor evalutes two booleans.
  // returns true if one is true and one is false
  // return true if both are true or both are false
//^ could have simplified but it worked


// WEEK TWO DAY FIVE - 10/13/2023

function plural(n) {
    return n !== 1 ? true : false;
}
  // could have just done n !== 1;


function helloWorld () {
    let str = 'Hello World!';
    console.log(str);
}


function saleHotdogs(n){
    return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;
}
// could simplify and do n*(n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90 )


function addFive(num) {
    var total = num + 5
    return total;
}
// fixer function, code original was returning num instead of total
// could have simplified and just return num * 5


function pipeFix(numbers){
    let pipes = []
    for(let n = numbers[0]; n <= numbers[numbers.length-1]; n++){
      pipes.push(n);
    }
    return pipes;
  }
// struggled a little, [numbers.length - 1] kind of messes me up.

