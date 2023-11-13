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


