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

