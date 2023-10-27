// WEEK FOUR DAY ONE - 10/23/2023

function removeSmallest(numbers) {
    let smallNum = Math.min(...numbers);
    let findSmall = numbers.indexOf(smallNum);
    return numbers.filter((total, value) => value !== findSmall);
}

/* could have done   
let indexOfMin = numbers.indexOf(Math.min(...numbers));
return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
*/

var number=function(array){
    return array.map((letter, num) => `${num + 1}: ${letter}`);
}

// format strings in an array as 'n: string'


function getDivisorsCnt(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        if (n % i === 0){
            count+= 1
        }
    }
    return count;
}

//^ passed but timed out and was told to optimize
// tried a few different ways after looking up what was going on
// came up with final code below, only one I found worked and didn't time out.

  function getDivisorsCnt(n){
    let count = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            if(n / i === i){
                count++;
            } else {
                count = count + 2;
            }
        }
    }
    return count;
  }

//

function stray(numbers) {  
    let num = numbers.sort();
      if (num[0] !== num[1]){
          return num[0];
      } else {
          return num[num.length - 1]
      }
  }

  // needed to remember to sort

  
  function solution(nums){
    return nums !== null ? nums.sort((a,b) => (a - b)) : [];
  }


// WEEK FOUR DAY TWO - 10/24/2023

String.prototype.toAlternatingCase = function () {
    let str = '';
    for(let i = 0; i < this.length; i++){
        if(this.charAt(i) === this.charAt(i).toLowerCase()) {
            str+= this.charAt(i).toUpperCase();
        } else if (this.charAt(i) === this.charAt(i).toUpperCase()){
            str+= this.charAt(i).toLowerCase() 
        } else {
            str+= this.charAt(i);
        }
    }
    return str;
}

// could have used split and mapped it

function powersOfTwo(n){
    let nums = [];
    for(let i = 0; i <= n; i++){
      nums.push(Math.pow(2,i))
    }
  return nums;
  }


  function breakChocolate(n,m) {
    return 0 < n * m - 1 ? n * m - 1 : 0;
  }
  
  //^ did all on my own no help at all. YAY ME!

  function correct(string){
    return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
   }


function expressionMatter(a, b, c) {
    let highest = Math.max(
        a + b + c,
        a * b * c,
        a * b + c,
        a * (b + c),
        a + b * c,
        (a + b) * c
    )
    return highest;
}

// Needed help couldn't figure out how to get there

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10){
      return 100;
    } else if (exam > 75 && projects > 4){
      return 90;
    } else if (exam > 50 && projects > 1){
      return 75;
    } else {
      return 0;
    }
  }

  // Another all on my own no help! YAY ME!

  function isPalindrome(x) {
    const palString = x.replace(/[^A-Za-z]/g, "").toLowerCase();
    const reverseString = palString.split("").reverse().join("");
    return palString === reverseString ? true : false;
}

// could have x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false


function arithmetic(a, b, operator){
    switch(operator) {
        case 'add': return a + b;
        break;
        case 'subtract': return a - b;
        break;
        case 'divide': return a / b;
        break;
        case 'multiply': return a * b;
        break;
        default: 'give me a operator';
    }
}

// started out with an if statement and after writing it i realized since I have more
// that 2 conditionals I should use a switch statement instead, and so I did.


var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


function sumStr(a,b) {
    let nums = Number(a) + Number(b);
    return nums.toString();
}
//^ Did all by me onsies! YAY ME!!

function findDifference(a, b) {
    return Math.abs(a.reduce((total, i) => total * i) - b.reduce((total, i) => total * i));
}

// needed help

function greet(language) {
	const speak = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso"
    }
    return speak[language] || speak.english;
}

// needed help, tried a switch but that was no go.


// WEEK FOUR DAY THREE - 10/25/2023

var a = "code";
var b = "wa.rs";
var name = a + b;


function nbDig(n, d){
    let count = 0;
    for(let i = 0; i <= n; i++){
        let square = (Math.pow(i, 2) + '').split('');
        square.forEach((val) => val == d ? count++ : null)
    }
    return count;
}

// had to look up did not understand what they were asking

function oddCount(n){
    return Math.floor(n/2);
}

// simple easy why didn't i think of this :(

function reverseList(list) {
    return list.reverse();
}

// YAY! Did one by myself!!


function howMuchILoveYou(nbPetals) {
    let petals = ["I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];

    return petals[(nbPetals - 1) % 6];
  }

// tried to loop, lost focus, needed some help.


function createArray(number){
    var newArray = [];
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    return newArray;
  }


  var isAnagram = function(test, original) {
    let setOne = original.toLowerCase().split('').sort().join('');
    let setTwo = test.toLowerCase().split('').sort().join('');
    if (setOne === setTwo) {
        return true;
    } else {
        return false;
    }
};


function calculateYears(principal, interest, tax, desired) {
    let y = 0;
    for (y = 0; principal < desired; y++){
         principal += principal * interest * (1 - tax);
    }
    return y;
 }

 // got it started good but lost with math part,


 // WEEK FOUR DAY FOUR - 10/27/2023

const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for(let n = begin; n <= end; n = n + step){
        sum = sum + n
    }
    return sum;
};

/* begin = num stating at
end = num ending at
step = what to count by, so if 2 count by 2 -> 2 4 6 8
*/

function toBinary(n){
    return Number(n.toString(2));
}

// I don't get binary numbers. 

const flip = (d, a) => {
    if (d === 'R'){
        return a.sort((a, b) => a - b);
    } else{
        return a.sort((a, b) => b - a);
    }
}


function reverseLetter(str) {
    return str.replace(/[^a-z]/gi, '').split('').reverse().join('');
}

// spot on just needed help with regex



