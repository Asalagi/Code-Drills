// WEEK ONE DAY ONE

//Practice one - reverse a string. 

function soluntion(str){
    return str.split('').reverse().join('');
}

// Practice Two - Implement a function, which takes a non-negative integer, 
// representing the number of eggs to boil. It must return the time in minutes (integer), 
// which it takes to have all the eggs boiled.

function cookingTime(eggs) {
    let minutes = Math.abs(5); // non negative num, 5 min is boiling time and math.abs makes positive num
    let eggMax = 8; // 8 is the number of max eggs that can but boiled
    return ; // head getting to mathy I don't know how to display what it wants
}

// WEEK ONE DAY TWO

function positiveSum(arr) {
    let sum = 0; // no negative numbers, make them 0
    for(let n = 0; n < arr.length; n++) {
        if(arr[n] > 0) {
            sum += arr[n]
        }
    }
    return sum;
}

function repeatStr (n, s) {
    let repeat = s.repeat(n)
    return repeat;
  }


function removeChar(str){
    return str.substring(1, str.length -1)
};

function squareSum(numbers){
    let sum = 0;
    for(let n = 0; n < numbers.length; n++) {
        sum += Math.pow(numbers[n], 2)
    }
    return sum;
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort(function(a, b){return a - b});
        return args[0];
    }
}
 

var summation = function (num) {
    let total = 0;
    for(let n = 0; n <= num; n++) {
      total += n;
    }
    return total;
  }

  function noSpace(x){
    return x.replaceAll(' ', '');
  }


  function greet () {
    let message = 'hello world!';
    return message;
  }


  function countSheeps(sheep) {
    return sheep.filter(Booleen).length;
  }

  const stringToNumber = function(str){
    let num = Number(str);
    return num;
  }


  // WEEK ONE DAY THREE

  function doubleInteger(i) {
    return i * 2;
  }


  function litres(time) {
    let nathanDrinks = .5;
    let hour = time;
    return Math.floor(hour * nathanDrinks);
  }

  /*   function litres(time) {
    let nathanDrinks = .5;
    return Math.floor(time * nathanDrinks);
  }
  simplified it */
  
  function booleanToString(b){
    if (b === true) {
      return "true";
    } else {
      return "false";
    }
  }

  // best practice listed - return b.string();

  function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }


function basicOp(operation, value1, value2){
    switch (operation) {
        case "+":
            total = value1 + value2;
            break;
        case "-":
            total = value1 - value2;
            break;
        case "*":
            total = value1 * value2;
            break;
        case "/":
            total = value1 / value2;
            break;
        default:
    }
    return total;
}

/* had a little trouble with this one, wanted to 
use if but use if if its between 2 arguements use 
switch if its betweeen more
*/

function century(year) {
    let century = year * .01;
    return Math.ceil(century);
}

  // could do divide by 100. why didn't I think of that?!

  
function maps(x){
    let doubled = x.map(n  => n*2);
    return doubled;
}


function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

function past(h, m, s){
    let hour = h * 60 * 60 * 1000;
    let minute = m * 60 * 1000;
    let second = s * 1000;
    let total = hour + minute + second;
    return total;
  }

  function abbrevName(name){
    let nameArray = name.split(' ');
    let initials = nameArray[0][0] + '.' + nameArray[1][0];
    return initials.toUpperCase();
  } 

  // WEEK ONE DAY FOUR

  function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return n * m;
    }
}


function lovefunc(flower1, flower2){
    if (flower1 % 2 !== flower2 % 2) {
        return true;
    } else {
        return false;
    }
  }

  function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
}

// best practice listed to use ternary (?)
// example condition ? exprIfTrue : exprIfFalse

function makeUpperCase(str) {
    return str.toUpperCase();
  }

  function findNeedle(haystack) {
    let position = haystack.indexOf('needle');
    return haystack.includes('needle') ? `found the needle at position ${position}` : 'no needle found';
}