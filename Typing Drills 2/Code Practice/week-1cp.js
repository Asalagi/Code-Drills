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