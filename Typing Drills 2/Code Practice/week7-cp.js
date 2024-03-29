//WEEK SEVEN DAY ZERO - 11/11/2023
const reverseSeq = n => {
    let count = [];
    for(let i = 1; i <= n; i++){
        count.push(i);
    }
    return count.reverse();
  };


function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0;
};
// remeber proper way === not ==


function greet(name){
    if(name === "Johnny"){
        return 'Hello, my love!';
    } else {
        return `Hello, ${name}!`;
    }
}
// fixed all on my own. YAY ME!


var countSheep = function (num){
    let count = '';
    for(let i = 1; i <= num; i++){
        count += `${i} sheep...`;
    }
    return count;
}
// needed some fine tuning but i was on the right track


const quarterOf = (month) => {
    if(month <= 3){
      return 1;
    } else if (month <= 6){
      return 2;
    } else if (month <= 9){
      return 3;
    } else {
      return 4;
    }
}
// All on my own! I'm sure there is a less wordy way of doing it, but I did it on my own and I'm proud that. YAY ME!


// WEEK SEVEN DAY ONE - 11/13/2023

function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}


const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!'
  } else if(p1 === 'paper' && p2 === 'scissors' || p1 === 'rock' && p2 === 'paper' || p1 === 'scissors' && p2 === 'rock'){
    return 'Player 2 won!'
  } else {
    return 'Draw!'
  }
};
// did all on my own. Could have done p1 === p2 for draw.

function rentalCarCost(d) {
  let price = 40;
  if (d >= 7){
    return (d * price) - 50;
  } else if (d < 7 && d >= 3){
    return (d * price) - 20;
  } else {
    return d * price
  }
}


function getGrade (s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average >= 90 && average <= 100){
    return 'A';
  } else if (average >= 80 && average < 90){
    return 'B';
  } else if (average >= 70 && average < 80){
    return 'C';
  } else if (average >= 60 && average < 70){
    return 'D';
  } else {
    return 'F';
  }
}


class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}


function otherAngle(a, b) {
  return 180 - (a + b);
}


function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}


function updateLight(current) {
  if(current === 'green'){
    return 'yellow';
  } else if (current === 'yellow'){
    return 'red';
  } else {
    return 'green'
  }
}
// could have done current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';


function twoSort(s) {
  let sorting = s.sort();
  return sorting[0].split('').join('***');
}


function fixTheMeerkat(arr) {
  return arr.reverse();
}


function solution(a, b){
  return a.length > b.length ? `${b + a + b}` : `${a + b + a}`;
}


function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
}


function findMultiples(integer, limit) {
  let values = [];
  for(let i = integer; i <= limit; i+= integer){
    values.push(i);
  }
  return values;
}
// was so close but needed help


function shortcut (string) {
  return string.replace(/[aeiou]/g,'');
}


function peopleWithAgeDrink(old) {
  return old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky';
};


function removeUrlAnchor(url){
  let end = url.indexOf('#');
  return end > 0 ? url.slice(0, end) : url;
}
// could have done url.split('#')[0]; 
// But I did all on my own so I am proud of myself for doing it on my own


function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
// I did not get this one at all, had to use unlock solution.


//WEEK SEVEN DAY TWO - 11/14/2023
function dontGiveMeFive(start, end){
  let count = 0;
  for(let i = start; i < end; i++){
    if (!/5/.test(i)){
      count++;
    }
  }
  return count;
}
// got it all on my own other than the !/5/.test(i) part


function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((val) => !geese.includes(val))
};
// needed help :(


function capitalizeWord(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
}
// did on my own
// could have done word[0].toUpperCase() + word.slice(1)


function getRealFloor(n) {
  if (n <= 0){
    return n;
  } else if (n < 13){
    return n - 1;
  } else {
    return n - 2;
  }
}
// ^ orignal
function getRealFloor(n) {
  return n <= 0 ? n : n < 13 ? n - 1 : n - 2;
}
//^ refined
// did on my own


var capitals = function (word) {
  let letters = [];
  for(let i = 0; i < word.length; i++){
    if(word[i].match(/[A-Z]/)){
      letters.push(i)
    }
  }
  return letters;
};
// needed a little help


function checkAlive (health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}


function getChar(c){
  return String.fromCharCode(c);
}


function divisibleBy(numbers, divisor){
  let nums = [];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % divisor === 0){
      nums.push(numbers[i]);
    }
  }
  return nums;
}
// struggled a little was almost there but need some work. 
// dumdum i could have just used filter :(

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}
// did all on my own YAY ME!


function flattenAndSort(array) {
  return array.flat(1).sort((a,b) => a - b);
}


function getEvenNumbers(numbersArray){
  return numbersArray.filter((val) => val % 2 === 0);
}
// did on my own YAY ME!


function minValue(values){
  let sorted = values.sort();
  let result = [];
  for(let i = 0; i < sorted.length; i++){
    if(result. indexOf(sorted[i]) === -1){
      result.push(sorted[i]);
    }
  }
  return +result.join('');
}
// needed help on tjis one :(

//WEEK SEVEN DAY THREE - 11/15/2023
function correctTail(body, tail){
  return body.slice(body.length - 1) === tail;
}
// fixed problem on my own


function replace(s){
  return s.replaceAll(/[aeiou]/gi, '!');
}


function fizzbuzz(n){
  let fbArr = [];
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      fbArr.push('FizzBuzz');
    } else if(i % 5 === 0){
      fbArr.push('Buzz')
    } else if(i % 3 === 0){
      fbArr.push('Fizz')
    } else {
      fbArr.push(i);
    }
  }
  return fbArr;
}
// tried so very hard and was so very close, but I did need help


let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

function equal2(){
  let a =  v4,
      b =  v2; 
  return a - b;
}

function equal3(){
  let a =  v1, 
      b =  v5; 
  return a * b;
}

function equal4(){
  let a =  v4, 
      b =  v5; 
  return a / b;
}

function equal5(){
  let a =  v6, 
      b =  v3; 
  return a % b;
}


function position(letter){ 
  return `Position of alphabet: ${letter.charCodeAt(letter) - 96}`;
}


function apple(x){
  return Math.pow(x,2) > 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`;
}


function weatherInfo (temp) {
  let c = (temp - 32) * 5/9;
  return c < 0 ? `${c} is freezing temperature` : `${c} is above freezing temperature`;
}


function remainder(n, m){
  if(n > m){
    return Math.round(n % m);
  } else {
    return Math.round(m % n);
  }
}
// did all on my own YAY ME!


//WEEK SEVEN DAY FOUR - 11/16/2023
function generateRange(min, max, step){
  let result = [];
  for(let i = min; i <= max; i+= step){
    result.push(i);
  }
  return result;
}
// did most on my own just needed help with the i+= step, i had step++


function factorial(n){
  if(n === 0){
    return 1;
  }
  for(let i = n - 1; i >= 1; i--){
    n = n * i
  }
  return n;
}
// did not get this one


function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n))
}
// i did not get this one, had to look up, doesn't make a whole lot of sense to me


function howManyDalmatians(number){
  if (number <= 10){
    return "Hardly any";
  } else if(number <= 50){
    return "More than a handful!";
  } else if(number === 101){
    return "101 DALMATIANS!!!";
  } else {
    return "Woah that's a lot of dogs!";
  }
}


function sumOfMinimums(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
      sum+= Math.min(...arr[i]);
    }
  return sum;
}


function getSize(width, height, depth){
  let area = 2 * (height * width) + 2 * (height * depth) + 2 * (width * depth);
  let volume = width * height * depth;
  return [area, volume];
}
// needed help with area formula.


function mango(quantity, price){
  let q = Math.floor(quantity / 3);
  let remain = quantity % 3;
  return (q * 2 * price) + (remain * price);
}
// could have done price * (quantity - Math.floor(quantity / 3));


function printArray(array){
  return array.join();
}
// did on my own, started to over think but started to use my brain


function array(string) {
  let split = string.split(',');
  return split.length > 2 ? split.slice(1, -1).join(' ') : null;
}
// did all on my own YAY ME!
 

function reverse(string){
  return string.split(' ').reverse().join(' ');
}


function pillars(numPill, dist, width) {
  return numPill < 2 ? 0: ((numPill-2)*width) + ((100*dist)*(numPill-1)); 
}


function formatMoney(amount){
  return `$${amount.toFixed(2)}`;
}


//WEEK SEVEN DAY FIVE - 11/17/2023
function evaporator(content, evap_per_day, threshold){ 
  let leftOver = content;
  let percent = 100;
  while(percent > threshold){
    percent = percent - percent * (evap_per_day / percent);
    leftOver+= 1;
  }
  return leftOver;
}
// this made zero sense to me

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt(Math.pow(age1, 2) + Math.pow(age2, 2) + Math.pow(age3, 2) + Math.pow(age4, 2) + Math.pow(age5, 2) + Math.pow(age6, 2) + Math.pow(age7, 2) + Math.pow(age8, 2)) / 2);
}
// age x age add alltogether squareroot / 2
// first try worked fine, want to try a more compact way of doing this.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = [age1, age2, age3, age4, age5, age6, age7, age8];
  let pow = ages.map((x) => Math.pow(x, 2));
  let sum = pow.reduce((x, y) => x + y);
  return Math.floor(Math.sqrt(sum) / 2);
}


function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}
// nothing was wrong here, maybe just written funky but nothing was wrong


function stringClean(s){
  return s.replace(/[0-9]/g, '');
}


function rowWeights(array){
  let teamEven = [];
  let teamOdd = [];
    for(let i = 0; i < array.length; i++){
      if(i % 2 === 0){
        teamEven.push(array[i]);
      } else {
        teamOdd.push(array[i]);
      }
    }
  return [teamEven.reduce((a,b) => a + b, 0), teamOdd.reduce((a,b) => a + b, 0)];
}
// could have dont filter and reduce as well


function sumOfDifferences(arr) {
  let sorted = arr.sort((a,b) => b - a);
  let sum = 0;
  for(let i = 0; i < sorted.length - 1; i++){
    sum+= sorted[i] - sorted[i + 1];
  }
  return sum;
}
// was almost there but needed some help


function seatsInTheater(nCols, nRows, col, row) {
  let columns = nCols - col + 1;
  let rows = nRows - row;
  return  columns * rows;
}


var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = 0;
    var str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      };
    sum += count;
    str += count + " = " + sum;
    return str;
    };
  };

  return SequenceSum;

})();
// had to unlock :(