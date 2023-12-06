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


function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};


function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}


function sumMul(n,m){
  let sum = 0;
  for(let i = n; i < m; i++){
    if (i % n === 0){ // forgot about this part
      sum += i;
    }
  }
  return n > 0 && m > 0 ? sum : 'INVALID' ;
}
// did okay just needed some help getting there


function removeDuplicateWords (s) {
  let split = s.split(' ');
  return split.filter((item, index) => split.indexOf(item) === index).join(' ');
}
// neede help


var findAverage = function (nums) {
  let numLeng = nums.length;
  let sum = nums.reduce((value, total) => value + total);
  return sum / numLeng;
}
//should have condensed it more but thats okay it worked


function getDrinkByProfession(param){
  let input = param.toLowerCase();
  switch(input){
    case 'jabroni':
      return 'Patron Tequila';
      break;
    case 'school counselor':
      return 'Anything with Alcohol';
      break;
    case 'programmer':
      return 'Hipster Craft Beer';
      break;
    case 'bike gang member':
      return 'Moonshine';
      break;
    case 'politician':
      return 'Your tax dollars';
      break;
    case 'rapper':
      return 'Cristal';
      break;
    default: 
      return 'Beer';
  }
}
// did on my own

function SubtractSum(n){
  let fruits = {
    1:'kiwi',
    2:'pear',
    3:'kiwi',
    4:'banana',
    5:'melon',
    6:'banana',
    7:'melon',
    8:'pineapple',
    9:'apple',
    10:'pineapple',
    11:'cucumber',
    12:'pineapple',
    13:'cucumber',
    14:'orange',
    15:'grape',
    16:'orange',
    17:'grape',
    18:'apple',
    19:'grape',
    20:'cherry',
    21:'pear',
    22:'cherry',
    23:'pear',
    24:'kiwi',
    25:'banana',
    26:'kiwi',
    27:'apple',
    28:'melon',
    29:'banana',
    30:'melon',
    31:'pineapple',
    32:'melon',
    33:'pineapple',
    34:'cucumber',
    35:'orange',
    36:'apple',
    37:'orange',
    38:'grape',
    39:'orange',
    40:'grape',
    41:'cherry',
    42:'pear',
    43:'cherry',
    44:'pear',
    45:'apple',
    46:'pear',
    47:'kiwi',
    48:'banana',
    49:'kiwi',
    50:'banana',
    51:'melon',
    52:'pineapple',
    53:'melon',
    54:'apple',
    55:'cucumber',
    56:'pineapple',
    57:'cucumber',
    58:'orange',
    59:'cucumber',
    60:'orange',
    61:'grape',
    62:'cherry',
    63:'apple',
    64:'cherry',
    65:'pear',
    66:'cherry',
    67:'pear',
    68:'kiwi',
    69:'pear',
    70:'kiwi',
    71:'banana',
    72:'apple',
    73:'banana',
    74:'melon',
    75:'pineapple',
    76:'melon',
    77:'pineapple',
    78:'cucumber',
    79:'pineapple',
    80:'cucumber',
    81:'apple',
    82:'grape',
    83:'orange',
    84:'grape',
    85:'cherry',
    86:'grape',
    87:'cherry',
    88:'pear',
    89:'cherry',
    90:'apple',
    91:'kiwi',
    92:'banana',
    93:'kiwi',
    94:'banana',
    95:'melon',
    96:'banana',
    97:'melon',
    98:'pineapple',
    99:'apple',
    100:'pineapple'
    };

      let number = n - String(n).split('').reduce((sum, item) => sum += +item, 0);
      if(number > 100) return SubtractSum(number);
      else return fruits[number];
}

// unlocked this one didn't make sense to me


