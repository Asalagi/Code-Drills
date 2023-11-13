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

