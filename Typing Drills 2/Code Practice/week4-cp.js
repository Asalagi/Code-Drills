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