//WEEK EIGHT DAY ONE - 11/20/2023
function include(arr, item){
    return arr.includes(item)
}


var greet = function(name) {
    let person = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${person}!`;
};
// could have done charat for uppercase


var cubeChecker = function(volume, side){
    return volume > 0 && side > 0 && volume === side * side * side;
};
// took a bit to get there needed to work around neg numbers and zeros.


function multipleOfIndex(array) {
    let result = [];
    for(let i = 0; i <= array.length; i++){
        if(array[i] % i === 0) {
            result.push(array[i]);
        }
    }
    return result;
}
// did not get this one had to unlock. freacked out about neg nums and zeros
//^ original code above below examples of correct code. Needed to do or equal to 0
// describtion of kata terrible!
function multipleOfIndex(array) {
    return array.filter((x,i) => x == 0 || x % i === 0)
  }

  function multipleOfIndex(array) {
    const result = [];
  for (let i = 0; i < array.length; i++) {
   if (array[i] % i === 0 || array[i] === 0) {
      result.push(array[i]);
    }
  }
  return result;
  
}


function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
// did on my own. I needed a win today.


//RANDOM DAY - 11/28 & 11/29
function validateUsr(username) {
    let expression = /^([_a-z0-9]){4,16}$/;
    let res =  expression.test(username) 
    return res;
}

var websites = [];
for(let i = 0; i < 1000; i++){
    websites.push('codewars')
}


function nearestSq(n){
    let square = Math.sqrt(n);
    let round = Math.round(square)
    return Math.pow(round, 2);
}

function sameCase(a, b) {
    if (!a.match(/^[A-Za-z]$/) || !b.match(/^[A-Za-z]$/)) {
      return -1;
    } else if ((a.match(/^[A-Z]$/) && b.match(/^[A-Z]$/)) || (a.match(/^[a-z]$/) && b.match(/^[a-z]$/))) {
      return 1;
    } else {
      return 0;
    }
  }
  // could have done to uppercase to lowercase comparasion
