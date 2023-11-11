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
