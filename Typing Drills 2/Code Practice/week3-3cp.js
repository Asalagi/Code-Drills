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

