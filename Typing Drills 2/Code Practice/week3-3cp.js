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

  
