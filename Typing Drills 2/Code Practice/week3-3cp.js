// WEEK THREE DAY ONE - 10/16/2023

function descendingOrder(n){
    let numString = n.toString().split('');
    let result = numString.sort(function(a,b){return b - a});
    return Number(result.join(''));
}

  /*  could have done 
  +(n + '').split('').sort(function(a,b){ return b - a }).join('');
  for simplicity and efficientcy
  */

function filter_list(l) {
    return l.filter((str) => typeof str !== 'string');
}

// struggled with this one, looked it up

function getMiddle(s){
    let len = s.length;
    return s.slice((len - 1)/2, len / 2 + 1)
  }

// forgot about slice, was making it way to complicated than it should have be
// Final result was with much help

function isIsogram(str){
    return !str.match(/([a-z]).*\1/i) ? true : false;
  }

  // had to look up regex

function XO(str) {
    let charX = str.match(/x/gi);
    let charO = str.match(/o/gi);
    let results = (charX && charX.length) === (charO && charO.length);
   return results ? true : false;
}

/* was so so so close, did all on my own but forgot the charX a
nd charO before the char.length.
*/

String.prototype.toJadenCase = function () {
    const sSplit = this.split(' ');
    for (let w = 0; w < sSplit.length; w++) {
        sSplit[w] = sSplit[w].charAt(0).toUpperCase() + sSplit[w].slice(1);
    }
    return sSplit.join(' ');
  };

  // neede to look up prototype
// takes a string splits the string
/* runs the array (becasue the string is split and turns to an array of words)
   throuh a for loop, looks for the first character(position 0)
   changes it to uppercase and adds the rest of the word from position 1 and on
*/
// then join string back together and return it.
// couild have also mapped split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')

function findShort(s){
    return Math.min(...s.split(' ').map(s => s.length));
  }

// looked up and learned about spread and using it with Math methods

function accum(s) {
    return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join('-');
  }

  //could have also done s.split('')
  // had to look up struggled with how to get it to repeat, had no idea you could use index for that

// WEEK THREE DAY THREE - 10/18/2023

  function DNAStrand(dna){
    let results = '';
    for (let d = 0; d < dna.length; d++){
        if (dna[d] === 'A') {
            results += 'T';
          } else if (dna[d] === 'T'){
            results += 'A';
            } else if (dna[d] === 'C') {
                results += 'G';
              } else if (dna[d] === 'G') {
                  results += 'C';
              }
    }
    return results;
}

// A to T
// T to A
// G to C
// C to G
/* really struggled started with a for loop and if statement and tried to 
find a lesser way with replace all, and matching and went along that line of
thinkging I fell into trying to make it as compact as possinle instead of 
going with my original way of working it.
*/


function sumTwoSmallestNumbers(numbers) {  
    let lowest = numbers.sort((a, b) => a - b);
    return lowest[0] + lowest[1];
}

// nice job Allie! You did this all on your own! Didn't look anthing up!

function getSum(a, b){
    if (a === b) {
      return a;
    } else {
      return a + b;
    }
}
/* ^ passed first tested then err on second, miss understood what was wanted.
 - Incorrect answer for a=5, b=-1: expected 4 to equal 14
 - Incorrect answer for a=-100, b=-470: expected -570 to equal -105735
*/

function getSum(a, b){
    let min = a < b ? a : b;
    let max = a < b ? b : a;
    
    let sum = 0;
    for(let n = min; n <= max; n++){
      sum += n;
    }
    return sum;
}

// finishng code to loop through and keep adding from min to max

function solution(str, ending){
   return str.endsWith(ending);
}

// another awesome try!!!

function maskify(cc) {
    let lastDigits = cc.substr(-4);
    return lastDigits.padStart(cc.length, "#");
}

// started out great, was on the right track, over thought and got off course.

function friend(friends){
    return friends.filter(word => word.length === 4);
}

function isTriangle(a,b,c){
    if (a + b <= c || b + c <= a || a + c <= b) {
        return false;
    } else {
        return true;
    }
}

 // two long sides one short side
// so a & b must be longer than c, or c & c must but longer than a and so on.

function addBinary(a,b) {
    return  (a+b).toString(2);
 }

 // I don't understand binary numbers I see it 1s and 0s but don't understand which is what

 function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }

//WEEK THREE DAY FOUR - 10/19/2023

  function longest(s1, s2) {
    let str = (s1 + s2).split('');
    let unique = str.filter((element, index) => {
        return str.indexOf(element) === index;
    });
    return unique.sort().join('');
  }

/* struggled with this one, got all the way to sorting them alphebetically
but then couldn't figure out what to get them to get rid of the duplicates
I looked stuff up through google, found thw way above, it worked. 
After submission found I could have used new set and that would have taken
the duplicates out.
*/
  function longest(s1, s2) {
    return [...new Set(s1+s2)].sort().join('');
  }


function rowSumOddNumbers(n) {
   return Math.pow(n, 3);
}

// needed help, read it needed to be x3 came up with Maht.pow


function nbYear(p0, percent, aug, p) {
    let years = 0;
      for (years = 0; p0 < p; years++) {
        p0 += Math.floor(p0 * (percent / 100) + aug);
      }
      return years;
    }

/* ^ orignal code above help was needed to refine but I was on the right track
with the for loop. 
passed all test but one, ugh.
OMG! This was tortured, after nearly 45 minutes looking up difference solutions
all were through error like mine I decided to try adding Math.floor
I add that stupid math method all over, finally tried Math.floor(p0 + p0....)
nope failed, rewrote the code to make sure i had everyhting in it place, still no.
finally gave up and looked at solution and all I needed to do was 
MOVE THE CODE TO THE SECOND P0. I feel like an idiot!
*/

function findNextSquare(sq) {
    let root = Math.sqrt(sq);
    let whole = Math.round(root);
    return sq === whole * whole ? Math.pow(root + 1, 2) : -1;
  }

// did all on my own! Super proud considering how the last Kata went.

function openOrSenior(data){
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
  }

  //  if 55 yrs+ && > 7 handicap == senior
  // everything else open

  function printerError(s) {
    return `${s.match(/[^a-m]/g)?.length || 0}/${s.length}`;
  }

  // could have done a for loop. needed help with the ? in the .length section

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2); 
};

// had to look up. I suck with binary numbers I jsut don't get it


var number = function(busStops){
    let offPeople = busStops.map(([on, off]) => on - off, 0);
    let peoples = offPeople.reduce((total, value) => total + value);
  return peoples;
}

var number = function(busStops){
    return busStops.map(([on, off]) => on - off, 0).reduce((total, value) => total + value);
}

/* OMG!!! I DID IT ALL ON MY OWN! Might be length and not best practice but I DID IT!
best practice listed -> busStops.reduce((rem, [on, off]) => rem + on - off, 0)
*/

// WEEK THREE DAY FIVE - 10/20/2023
function points(games) {
    let sum = 0;
    for(let i = 0; i < games.length; i++){
        if (games[i][0] > games[i][2])
        sum += 3;
        if (games[i][0] == games[i][2])
        sum += 1;
    }
    return sum;
}

// had to look up, struggled with how to get top number added to top

function divisors(integer) {
    let divs = [];
    for(let i = 2; i < integer; i++){
      if (integer % i === 0) divs.push(i)
    }
    return divs.length !== 0 ? divs : `${integer} is prime`;
  };

  // was so very close, my concept was there just need some work, forgot about .push


function SeriesSum(n){
    let num = 0;
    for(let i = 0; 0 < n; i++){
        num += 1 / (1 + i * 3)
  }
  return num.toFixed(2);
}

// got all the way to num += and than couldn't figure out how to fomulate math
// also had no idea i could use to fix to achieve decimal placing

function minMax(arr) {  
    let lowHigh = arr.sort((a, b) => a - b);
    let low = lowHigh.slice(0,1);
    let high = lowHigh.slice(-1);
    let profit = low.concat(high);
    return profit;
}

/* well not best practice but I did acheive it on my own so I'm pretty happu about that
 could have been a simple [Math.min(...arr), Math.max(...arr)], so I do feel slightly 
 dumb I didn't think of that. */